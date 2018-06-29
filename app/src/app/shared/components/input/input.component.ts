import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'digi-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  
  @Input() type: string;

  @Input() value: string;

  @Input() placeholder: string;

  @Input() prefix: string;

  constructor() { }

  ngOnInit() {
  }

}
