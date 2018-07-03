import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from '../../shared/native-features/push-notification/push-notification.service';

@Component({
  selector: 'digi-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {

  message: any;

  constructor(private pushService: PushNotificationService) { }

  ngOnInit() {
    this.pushService.getPermission();
    this.pushService.receiveMessage();
    this.message = this.pushService.currentMessage;
  }

  onSendMoney(event) {
    alert("Valor Transferido! Quando cair na conta do destinatário te enviaremos uma mensagem ;)");
  }

}
