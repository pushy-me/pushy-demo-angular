# pushy-demo-angular

A demo of the [Pushy Web SDK](https://github.com/pushy/pushy-sdk-web) integrated into a sample [Angular.js](https://angular.io/) web app.

> [Pushy](https://pushy.me/) is the most reliable push notification gateway, perfect for real-time, mission-critical applications.

This app registers your browser to receive push notifications and assigns it a unique token, which you can copy and paste into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test push notification.

Visit our documentation to [integrate Pushy into your existing Angular.js app](https://pushy.me/docs/additional-platforms/angular).

## Get Started

* Clone the repository locally: `git clone https://github.com/pushy/pushy-demo-angular.git`
* Run `cd pushy-demo-angular`
* Run `ng build --prod && npx http-server dist/*/ -o` to run the demo and open it in a web browser
* Press `Allow` in the browser when prompted to allow push notifications
* Copy the Pushy device token from the browser's console or alert window and paste it into the [Pushy Demo page](https://pushy.me/docs/resources/demo) to send yourself a test notification

## More Information

* [Pushy](https://pushy.me/)
* [Pricing](https://pushy.me/pricing)
* [Documentation](https://pushy.me/docs)

## License

[Apache 2.0](LICENSE)
