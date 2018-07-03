import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeolocationService {

  private GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

  private GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
  };

  constructor(private httpService: HttpClient) { }

  getUserPosition(): Observable<any>{
    return Observable.create(observer => {
      if(window.navigator && window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(
          (position) => { 
            observer.next(position);
            observer.complete();
          },
          (error) => { 
            observer.error(this.errorHandler(error))
          });
      }else{
        observer.error(this.GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
      }
    });
  }

  getLocationDetails(position): Observable<any>{
    return this.httpService.get(this.GOOGLE_API_URL + "?latlng=" 
     + position.coords.latitude + "," + position.coords.longitude + "&sensor=true")
  }

  private errorHandler(error){
    switch (error.code) {
     case 1:
      return this.GEOLOCATION_ERRORS['errors.location.permissionDenied']
     case 2:
      return this.GEOLOCATION_ERRORS['errors.location.positionUnavailable']
     case 3:
      return this.GEOLOCATION_ERRORS['errors.location.timeout']
    }
  };

}