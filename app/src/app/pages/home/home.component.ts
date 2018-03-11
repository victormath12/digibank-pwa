import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alertMsg: string;

  title = 'Digibank';

  ngOnInit () { }

  onCapture (capture) {
    this.alertMsg = 'Imagem Capturada: ' + capture.target.value;
  }

  hideAlert () {
    this.alertMsg = undefined;
  }

}
