import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'digi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() transparent: boolean;

  @Input() label: string;

  @Input() returnTo: string;

  @Input() fixed: boolean;

  @Input() addSpace: boolean;

  constructor(private router: Router) { }

  ngOnInit() {  }

  onClickIconBack() {
    if(this.returnTo){
      this.router.navigate([this.returnTo]);
    }else{
      throw new Error("Rota não encontrada, verifique o valor do 'returnTo' do componente de header");
    }
  }

}
