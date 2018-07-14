import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../../shared/native-features/geolocation/geolocation.service';

@Component({
  selector: 'digi-near-branches',
  templateUrl: './near-branches.component.html',
  styleUrls: ['./near-branches.component.scss']
})
export class NearBranchesComponent implements OnInit {

  branchList: Array<any>;

  userLocation;

  constructor(private geolocation: GeolocationService) { }

  ngOnInit() {
    this.getGeolocation();
    this.branchList = [
      { title: 'Vila Pires', link: '/' },
      { title: 'Alto do Ipiranga', link: '/' },
      { title: 'Rua Jordânia',link: '/' }
    ];
  }

  getGeolocation() {
    this.geolocation.getUserPosition().subscribe(
      (position) => { 
        console.log(position)
        this.getCurrentCity(position);
      },
      (error) => { console.log(error) }
    );
  }

  private getCurrentCity(position) {
    this.geolocation.getLocationDetails(position).subscribe(
      (location) => { 
        console.log(location);

        if(location.status === 'OK') {
          this.userLocation = {
            address: location.results[0].address_components[1].short_name,
            district: location.results[0].address_components[2].short_name,
            city: location.results[0].address_components[3].short_name,
            state: location.results[0].address_components[5].long_name,
            country: location.results[0].address_components[6].long_name
          }
        } else {
          throw new Error('Erro ao Consultar Google API');
        }
      },
      (error) => { console.log(error) }
    );
  }

}
