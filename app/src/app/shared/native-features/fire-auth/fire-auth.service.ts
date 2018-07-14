import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FireAuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signInByGoogle(): Promise<any> {
    var provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithRedirect(provider);
  }

  getCurrentUser(): Observable<any> {
    return this.afAuth.authState.take(1);
  }
  
}
