import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AscErrorHandler } from '../helpers/error-handler';
import { AscBaseService } from './base.service'; 
import { AscLocalStorage } from './storage/local.storage.service';


/**
 *
 *
 * @export
 * @Class GenericService
 * @extends {AscBaseService}
 */
@Injectable({ providedIn: 'root' })

export class LocationService{ 
  private nominatimApiUrl = 'https://nominatim.openstreetmap.org/reverse';
  constructor(private http: HttpClient) {}
getPosition(): Promise<GeolocationPosition> {
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getCityName(lat: number, lon: number): Observable<any> {
  const url = `${this.nominatimApiUrl}?lat=${lat}&lon=${lon}&format=json`;
  return this.http.get(url);
}

// getCurrentLocation() {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           if (position) {
//             console.log(
//               'Latitude: ' +
//                 position.coords.latitude +
//                 'Longitude: ' +
//                 position.coords.longitude
//             );
//             let lat = position.coords.latitude;
//             let lng = position.coords.longitude;

//             const location = {
//               lat,
//               lng,
//             };
//             resolve(location);
//           }
//         },
//         (error) => console.log(error)
//       );
//     } else {
//       reject('Geolocation is not supported by this browser.');
//     }
//   });
// }
}