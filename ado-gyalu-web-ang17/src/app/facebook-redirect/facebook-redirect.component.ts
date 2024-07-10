import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-redirect',
  standalone: true,
  imports: [],
  templateUrl: './facebook-redirect.component.html'
})
export class FacebookRedirectComponent {
  constructor(private router: Router) {
  }

  ngOnInit() {
    document.location.href = 'https://www.facebook.com/adogyalu/';
    window.location.href = 'https://www.facebook.com/adogyalu/';
  }
}
