import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../shared/native-features/fire-auth/fire-auth.service';

@Component({
  selector: 'digi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showCamera: boolean;

  currentUser: any;
  
  constructor(private auth: FireAuthService) { }

  ngOnInit() {
    this.getCurrentUserData();
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

  showSelfieCamera() {
    this.showCamera = true;
  }

  getImageData($event) {
    console.log($event);
    this.showCamera = false;
  }

}
