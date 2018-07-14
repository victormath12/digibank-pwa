import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../../shared/native-features/fire-auth/fire-auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentUser;

  constructor(private router: Router, private auth: FireAuthService) { }

  ngOnInit() {
    this.getCurrentUserData();
  }

  getCurrentUserData() {
    this.auth.getCurrentUser().subscribe(
      (user) => { 
        this.currentUser = user;
        console.log(user);
      }, (error) => console.log(error)
    );
  }

  signIn() {
    this.auth.signInByGoogle().then(function(result) {
      console.log("Google signin successful");
      console.log(result);
    }).catch(function(error) {
      console.log(error);
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
