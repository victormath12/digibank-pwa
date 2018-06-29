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

  // Get User permission to send push messages
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

  // Get new push messages from firebase server
  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.showNotification(payload);
      this.currentMessage.next(payload)
    });
  }

  // Update User Token to access the Firebase PushService
  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      // console.log('USER: ' + user);
      // if (!user) return;
      // const data = { [user.uid]: token }

      const data = { '3o9wvPQ3p2S0PbsofntF3VJ5A062': token }
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


  
/* 

  getPermission(user) {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken()
    })
    .then(token => {
      console.log(token)
      this.saveToken(user, token)
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }

  monitorRefresh(user) {
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken()
      .then(refreshedToken => {
        console.log('Token refreshed.');
        this.saveToken(user, refreshedToken)
      })
      .catch( err => console.log(err, 'Unable to retrieve new token') )
    });
  }

  private saveToken(user, token): void {
    const currentTokens = user.fcmTokens || { }
    if (!currentTokens[token]) {
      const userRef = this.db.collection('users').doc(user.uid)
      const tokens = { ...currentTokens, [token]: true }
      userRef.update({ fcmTokens: tokens })
    }
  }

  receiveMessages() {
    this.messaging.onMessage(payload => {
     console.log('Message received. ', payload);
     this.messageSource.next(payload)
   });
  } */

}
