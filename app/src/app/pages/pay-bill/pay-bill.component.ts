import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digi-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent implements OnInit {

  showCamera: boolean;

  constructor() { }

  ngOnInit() {  }

  showScanner() {
    this.showCamera = true;
  }

}
