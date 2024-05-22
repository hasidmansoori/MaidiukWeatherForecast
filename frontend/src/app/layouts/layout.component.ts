import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { fadeAnimation } from '../modules/shared/animations/animations'; 
import { Router } from '@angular/router'; 
import { AscLocalStorage } from '../modules/shared/services/storage/local.storage.service';
import { AscGenericService } from '../modules/shared/services/generic.service';
import { AscApiPaths } from '../modules/shared/helpers/api-paths';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../modules/shared/services/location.service';
import { CONSTANTS } from '../modules/shared/helpers/constants';
import { STORAGE_STRATEGIES } from 'ngx-webstorage';
 

@Component({
  selector: 'app-asc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation]
})
export class AscLayoutComponent implements OnInit { 
  addCardForm!: FormGroup; 
  apiKey = 'e9a5d3b74bf84418b11193028231901';
  paidCard:any; 
  myControl = new FormControl(); 
  filteredOptions!: Observable<any[]>;
  selectedCity:any; 
  weatherInfo:any; 
  paidUserInfo:any;
  options: any[] = [
    'Berlin',
    'Madrid',
    'Rome',
    'Paris',
    'Vienna',
    'Hamburg',
    'Warsaw',
    'Bucharest',
    'Budapest',
    'Barcelona',
    'Munich',
    'Prague',
    'Milan',
    'Sofia',
    'Cologne',
    'Stockholm',
    'Amsterdam',
    'Naples',
    'Marseille',
    'Turin',
    'Valencia',
    'Kraków',
    'Frankfurt',
    'Zagreb',
    'Seville',
    'Zaragoza',
    'Helsinki',
    'Wrocław',
    'Rotterdam',
    'Copenhagen',
    'Łódź',
    'Athens',
    'Stuttgart',
    'Düsseldorf',
    'Palermo',
    'Leipzig',
    'Riga',
    'Gothenburg',
    'Vilnius',
    'Dortmund',
    'Dublin',
    'Málaga',
    'Essen',
    'Bremen',
    'The Hague',
    'Dresden',
    'Genoa',
    'Antwerp',
    'Lisbon',
    'Hanover',
    'Poznań',
    'Nuremberg',
    'Lyon',
    'Toulouse',
    'Duisburg',
    'Gdańsk',
    'Bratislava',
    'Murcia',
    'Tallinn',
    'Palma de Mallorca',
    'Brno',
    'Bologna',
    'Szczecin',
    'Sintra',
    'Las Palmas',
    'Utrecht',
    'Aarhus',
    'Bochum',
    'Florence',
    'Malmö',
    'Wuppertal',
    'Alicante',
    'Nice',
    'Bilbao',
    'Bielefeld',
    'Bonn',
    'Lublin',
    'Bydgoszcz',
    'Plovdiv',
    'Córdoba',
    'Varna',
    'Nantes',
    'Münster',
    'Thessaloniki',
    'Bari',
    'Mannheim',
    'Espoo',
    'Karlsruhe',
    'Vila Nova de Gaia',
    'Kaunas',
    'Graz',
    'Montpellier',
    'Augsburg', 
  ];
  constructor(private fb: FormBuilder,
    private localStorage:AscLocalStorage,
    protected httpClient: HttpClient,
    private genericService:AscGenericService,
    private locationService:LocationService
  ) { 
    this.paidCard = this.localStorage.get('CARD'); 
  } 
  

  ngOnInit(): void {
    this.initialLiseAPP();
   }  

  initialLiseAPP(){ 
    this.addCardForm = this.fb.group({ 
      name: ['',Validators.required],
      card: ['',Validators.required]
    });
    this.getUserLocation();
    if(this.paidCard){
      this.getUserCardInfo(this.paidCard);   
    } 
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    ); 
    this.myControl.valueChanges.subscribe(value => {
      this.selectedCity = value;
    }); 
  }

   private _filter(value: any): string[] {
     const filterValue = value.toLowerCase();
     return this.options.filter(option => option.toLowerCase().includes(filterValue));
   }
 
  getUserLocation(): void {
    this.locationService.getPosition()
    .then(position => {
      const { latitude, longitude } = position.coords;
      this.locationService.getCityName(latitude, longitude).subscribe(
        (response: any) => {
          this.selectedCity = response.address.city || response.address.town || response.address.village; 
          this.getWeatherInfo(this.selectedCity);
        },
        (err) => { 
          console.error(err);
        }
      );
      })
    .catch(err => { 
      console.error(err);
    });
  } 

  getUserCardInfo(card:any): void { 
    this.genericService.get(`${AscApiPaths.weather.GET_CARD}`, null, {card:card}).subscribe(data=>{  
      setTimeout(() => {
        this.paidUserInfo = data;  
      }, 500);
    }) 
  } 

  getWeatherInfo(city:any) {
    const urlPaid = `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=6&lang=en`;  // if paid then get 4 days forecast
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&lang=en`;              // if not paid then get current forecast
    this.httpClient.get(this.paidCard ? urlPaid : url).subscribe((data:any)=>{  
      setTimeout(() => { 
        let weathersList:any[] = []; 
        let currentWeather:any = { 
          localtime:data.location.localtime,
          temp: data.current.temp_c,
          feelLike:data.current.feelslike_c,
          humidity:data.current.humidity,
          wind_kph:data.current.wind_kph,
          conditionText: data.current.condition.text, 
          imgPath: data.current.condition.icon
        }
        if(this.paidCard){
          data?.forecast?.forecastday.forEach((element:any) => {
            let forecast:any = { 
              localtime:element.date,
              temp: element.day.maxtemp_c,
              tempRange: element.day.maxtemp_c+'/'+element.day.mintemp_c,
              humidity:element.day.avghumidity,
              wind_kph:element.day.maxwind_kph,
              conditionText: element.day.condition.text, 
              imgPath: element.day.condition.icon
            }
            weathersList.push(forecast);
          });
        } 
        this.weatherInfo = {locationDetails:{name: data.location.name, region: data.location.region, country: data.location.country},
                            weathers:{current:currentWeather, otherDays: weathersList}} 
      }, 500);
    })  
  } 

  onSubmit(data:any){
    this.genericService.post(`${AscApiPaths.weather.ADD_CARD}`,this.addCardForm.value).subscribe(data=>{  
      setTimeout(() => {  
        this.paidCard = this.addCardForm?.get('card')?.value
        this.localStorage.save('CARD',this.paidCard);
        this.getUserCardInfo(this.paidCard);  
        this.addCardForm.reset(); 
      }, 500);
    })  
  } 

  addFavorite(){
    let payload = this.paidUserInfo;
    let items:any = this.paidUserInfo?.favourites?.split(',');
    if(!items){
      items = []
    }
    if(!items?.includes(this.selectedCity)){
      items.push(this.selectedCity);
    }
    if(items){
      payload['favourites'] = items.join(',');
    } 
    this.genericService.post(`${AscApiPaths.weather.ADD_CARD}`,payload).subscribe(data=>{  
      setTimeout(() => { 
        this.getUserCardInfo(this.paidCard);  
      }, 500);
    })  
    
  }

  
  /**
   * This method is clear Local Storage
   * @author mehdi.hayyat
   * @return {void}
   * @memberof AscAuthService
   */
  public logout(): void { 
    this.localStorage.remove('CARD'); 
    this.paidCard = null;
    this.paidUserInfo = null;
    this.initialLiseAPP();
  }

}