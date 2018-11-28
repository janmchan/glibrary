import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Library';
  constructor(public auth: AuthService) {
    console.log('Handling Auth');
    auth.handleAuthentication();
  }
}
