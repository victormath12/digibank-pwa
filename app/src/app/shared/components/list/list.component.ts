import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'digi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() { }

  onClickItem(item) { 
    if(item.link){
      this.router.navigate([item.link]);
    }else{
      throw new Error("Rota não encontrada, verifique o valor do 'link' do componente digi-list");
    }
  }

}
