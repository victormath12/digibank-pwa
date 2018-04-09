import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './../../native/push-notification/push-notification-service.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Digibank';
  alertMsg: string;
  usuarioLogado: any;
  message: any;

  constructor(
    private router: Router,
    private pushService: PushNotificationService,
    private fireAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  onCapture (capture) {
    this.alertMsg = 'Imagem Capturada: ' + capture.target.value;
  }

  hideAlert () {
    this.alertMsg = undefined;
  }

  gotoLogin() {
    this.router.navigate(['/']);
  }

  login() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      console.log('Firebase User: ', result.user);
      this.usuarioLogado = {
        nome: result.user.displayName,
        email: result.user.email,
        telefone: result.user.phoneNumber,
        avatar: result.user.photoURL,
      };
      console.log(this.usuarioLogado);
    }).catch((error) => {
      console.log('Erro ao Autenticar: ', error);
    });
  }

  push() {
    this.pushService.getPermission();
    this.pushService.receiveMessage();
    this.message = this.pushService.currentMessage;
  }

}
