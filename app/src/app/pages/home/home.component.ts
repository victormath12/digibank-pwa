import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../../shared/native-features/fire-auth/fire-auth.service';

@Component({  
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alertMsg: string;

  message: any;

  menuList: Array<any>;

  currentUser: any;

  constructor(private router: Router, private auth: FireAuthService) {}

  ngOnInit() {
    this.getCurrentUserData();
    this.menuList = [
      { iconLeft: 'face', title: 'Meu Perfil', link: '/profile' },
      { iconLeft: 'crop_free', title: 'Pagar Boleto', link: '/pay-bill' },
      { iconLeft: 'vertical_align_top',title: 'Treansferência',link: '/send-money' },
      { iconLeft: 'location_on', title: 'Agências próximas a mim', link: '/near-branches' }
    ];
  }

  getCurrentUserData() {
    this.auth.getCurrentUser().subscribe(
      (user) => { 
        this.currentUser = user;
        console.log(user);
        if(!this.currentUser || this.currentUser === null)
          this.auth.signInByGoogle();
      }, (error) => console.log(error)
    );
  }

}
