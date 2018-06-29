import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digi-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showCamera: boolean;
  
  constructor() { }

  ngOnInit() { }

  showScanner() {
    this.showCamera = true;
  }

}
