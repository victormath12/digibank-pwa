import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digi-near-branches',
  templateUrl: './near-branches.component.html',
  styleUrls: ['./near-branches.component.scss']
})
export class NearBranchesComponent implements OnInit {

  branchList: Array<any>;

  constructor() { }

  ngOnInit() {
    this.branchList = [
      { title: 'Vila Pires', link: '/' },
      { title: 'Alto do Ipiranga', link: '/' },
      { title: 'Rua Jordânia',link: '/' }
    ];
  }

}
