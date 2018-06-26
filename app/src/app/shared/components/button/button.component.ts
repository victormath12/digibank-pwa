import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'digi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;

  @Input() type: string;

  @Input() rounded: boolean;

  @Input() light: string;

  @Output() onClickButton = new EventEmitter();

  borderRounded: string;
  
  buttonLight: string;

  constructor() { }

  ngOnInit() { 
    this.rounded ? this.borderRounded = 'border-rounded' : '';
    this.light ? this.buttonLight = 'button-light' : '';
  }

  onClick($event) {
    this.onClickButton.emit($event);
  }

}
