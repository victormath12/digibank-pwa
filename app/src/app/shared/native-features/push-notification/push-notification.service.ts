import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PushNotificationService {

  private messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  getPermission() {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken()
    })
    .then(token => {
      console.log(token);
      this.updateToken(token);
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.showNotification(payload);
      this.currentMessage.next(payload)
    });
  }

  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      const data = { [user.uid]: token }
      console.log(data);
      this.db.object('fcmTokens/').update(data)
    })
  }

  showNotification(pushMessage) {
    Notification.requestPermission(function (permission) {
      alert("Permition: " + permission);
      if (permission === "granted") {
        var notification = new Notification(pushMessage.notification.body);
      }
    });
  }

}
