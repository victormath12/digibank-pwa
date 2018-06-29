import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from '../../shared/native-features/push-notification/push-notification.service';

@Component({
  selector: 'digi-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {

  message;

  constructor(private pushService: PushNotificationService) { }

  ngOnInit() {
    this.pushService.getPermission();
    this.pushService.receiveMessage();
    this.message = this.pushService.currentMessage;
  }

  showNotification(pushMessage) {
    Notification.requestPermission(function (permission) {
      alert("Permition: " + permission);
      if (permission === "granted") {
        var notification = new Notification(pushMessage);
      }
    });
  }

}
