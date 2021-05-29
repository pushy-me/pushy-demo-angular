import { Component } from '@angular/core';
import 'babel-polyfill';
import Pushy from 'pushy-sdk-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pushy-demo-angular';

  ngOnInit() {
    // Register visitor to receive push notifications
    Pushy.register({ appId: '550ee57c5b5d72117f51e801' }).then(function (deviceToken) {
      // Print device token to console
      console.log('Pushy device token: ' + deviceToken);

      // Alert window as well
      alert('Pushy device token: ' + deviceToken);

      // Send the token to your backend server via an HTTP GET request
      // fetch('https://your.api.hostname/register/device?token=' + deviceToken);

      // Succeeded, optionally do something to alert the user
    }).catch(function (err) {
      // Handle registration errors
      console.error(err);
    });
  }
}
