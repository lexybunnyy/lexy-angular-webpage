import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private s3: AWS.S3;

  constructor() {
    // Configure AWS SDK with your credentials and region
    AWS.config.update({
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
      region: 'eu-central-1'
    });

    this.s3 = new AWS.S3();
    this.listImages('www.adogyalu.net');
  }

  async listImages(bucketName: string, prefix: string = '', folder = ''): Promise<string[]> {
    const params = {
      Bucket: bucketName,
      Prefix: prefix
    }; 
    const data = await this.s3.listObjectsV2(params).promise();

    console.log(data?.Contents?.filter(item.Key.).map(item => item.Key));

    return [];
  }
}