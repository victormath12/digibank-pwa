import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({  
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alertMsg: string;

  message: any;

  list: Array<any>;

  constructor(private router: Router) {}

  ngOnInit() {

    this.list = [
      {
        iconLeft: 'crop_free',
        title: 'Pagar Boleto com scanner',
      },
      {
        iconLeft: 'vertical_align_top',
        title: 'Transferir dinheiro',
      },
      {
        iconLeft: 'vertical_align_bottom',
        title: 'Receber dinheiro',
      },
      {
        iconLeft: 'credit_card',
        title: 'Meus gastos no cartão',
      },
      {
        iconLeft: 'location_on',
        title: 'Agências próximas a mim',
      }
    ];

  }

  onCapture (capture) {
    this.alertMsg = 'Imagem Capturada: ' + capture.target.value;
  }

  hideAlert () {
    this.alertMsg = undefined;
  }

}
