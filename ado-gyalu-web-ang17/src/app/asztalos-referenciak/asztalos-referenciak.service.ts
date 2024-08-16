import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of, shareReplay, Subject, tap } from 'rxjs';
import { XMLParser } from 'fast-xml-parser';

type BucketList = {
  Key: string;
  LastModified: string;
  ETag: string;
  Size: number;
  StorageClass: string;
};

type BucketListResponse = {
  ListBucketResult: {
    Contents: BucketList[],
    Name: string
  }
};

@Injectable({
  providedIn: 'root'
})
export class AsztalosReferenciakService {

  private s3Url = 'https://www.adogyalu.net.s3.amazonaws.com/';

  private dataCache$: Observable<any> | null = null;
  private referenciakCache$: Observable<any> | null = null;
  private miniFooldalCache$: Observable<any> | null = null;

  private dataSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  private getData(): Observable<string[]> {
    if (!this.dataCache$) {
      this.dataCache$ = this.http.get(this.s3Url, { responseType: 'text' }).pipe(
        shareReplay(1),
        map(response => this.parseXml(response)
            .ListBucketResult
            .Contents
            .map(a => a.Key)),
        tap(data => this.dataSubject.next(data)), // Emit data to the subject

        catchError(error => {
          this.dataCache$ = null;
          return of(null);
        })
      );
    }
    return this.dataCache$;
  }

  getReferenciakData(): Observable<string[]> {
    if (!this.referenciakCache$) {

      this.referenciakCache$ = this.dataSubject.asObservable().pipe(
        tap(a => console.log('referenciakCache')),
        map((data: string[]) => data ? data.filter(item => /^assets\/referenciak\//.test(item)) : []),
        shareReplay(1)
      );
      this.miniFooldalCache$ = this.dataSubject.asObservable().pipe(
        tap(a => console.log('miniFooldalCache')),
        map((data: string[]) => data ? data.filter(item => /^assets\/referenciak_mini_fooldal\//.test(item)) : []),
        shareReplay(1)
      );
      this.getData().subscribe(); // Trigger data fetch if not already fetched
    }
    return this.referenciakCache$;
  }

  getMiniFooldalData(): Observable<string[]> {
    if (!this.miniFooldalCache$) {
      this.getData().subscribe(); // Trigger data fetch if not already fetched
      this.miniFooldalCache$ = this.dataSubject.asObservable().pipe(
        map((data: string[]) => data ? data.filter(item => /^assets\/referenciak_mini_fooldal\//.test(item)) : []),
        shareReplay(1)
      );
      this.referenciakCache$ = this.dataSubject.asObservable().pipe(
        map((data: string[]) => data ? data.filter(item => /^assets\/referenciak\//.test(item)) : []),
        shareReplay(1)
      );
    }
    return this.miniFooldalCache$;
  }

  clearCaches() {
    this.dataCache$ = null;
    this.referenciakCache$ = null;
    this.miniFooldalCache$ = null;
  }


  // Method to manually clear the cache if needed

  getBucketList() {
    return this.getData();
  }

  async getAjto(): Promise<{image: string, thumbImage: string}[]> {
    const referenciaData = await firstValueFrom(this.getReferenciakData());
    //const miniFooldal = this.miniFooldalCache$ ? await firstValueFrom(this.miniFooldalCache$) : [];
    //console.log(miniFooldal);

    //const miniFooldalFiles = miniFooldal.map(a => a.replace(/assets\/referenciak_mini_fooldal\/ajto\//g, ''))
    //console.log(miniFooldalFiles);

    return referenciaData
      .filter(a => a.includes('assets/referenciak/ajto'))
      .map(a => {
        return {
          image: a,
          thumbImage: a//'assets/referenciak_mini_fooldal/ajto/' + imageString
        }
      });
  }

  private parseXml(xml: string): BucketListResponse {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const parsedResult = parser.parse(xml);
    return parsedResult;
  }

}