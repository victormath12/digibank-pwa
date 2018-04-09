import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PushNotificationService {

  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor( private firedb: AngularFireDatabase, private fireAuth: AngularFireAuth ) { }

  updateToken(token) {
    this.fireAuth.authState.take(1).subscribe(user => {
      console.log('ENTRE: ' + user);
      if (!user) { return; }
      const data = { [user.uid]: token };
      console.log(data);
      this.firedb.object('fcmTokens/').update(data);
    });
  }

  getPermission() {
    this.messaging.requestPermission().then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken();
    }).then(token => {
      console.log(token);
      this.updateToken(token);
    }).catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      this.currentMessage.next(payload);
    });
  }

}
