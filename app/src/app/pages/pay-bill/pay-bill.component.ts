import { Component, OnInit } from '@angular/core';
import { WebRTCService } from '../../shared/native-features/web-rtc/web-rtc.service';

@Component({
  selector: 'digi-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent implements OnInit {

  showCamera: boolean;

  constructor(private webRTC: WebRTCService) { }

  ngOnInit() {  }

  showScanner() {
    this.showCamera = true;
  }

  getImageData($event) {
    console.log($event);
    this.showCamera = false;
  }

}
