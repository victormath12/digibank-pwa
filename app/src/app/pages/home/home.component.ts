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

  menuList: Array<any>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuList = [
      { iconLeft: 'profile', title: 'Meu Perfil', link: '/profile' },
      { iconLeft: 'crop_free', title: 'Pagar Boleto com scanner', link: '/pay-bill' },
      { iconLeft: 'vertical_align_top',title: 'Transferir dinheiro',link: '/send-money' },
      { iconLeft: 'vertical_align_bottom', title: 'Receber dinheiro', link: '/receive-money' },
      { iconLeft: 'credit_card', title: 'Meus gastos no cartão', link: '/' },
      { iconLeft: 'location_on', title: 'Agências próximas a mim', link: '/near-branches' }
    ];
  }

}
