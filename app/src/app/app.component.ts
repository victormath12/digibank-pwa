import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
