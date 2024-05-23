/**import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AscLayoutComponent } from '../layouts/layout.component';
import { AscLocalStorage } from '../modules/shared/services/storage/local.storage.service';
import { AscGenericService } from '../modules/shared/services/generic.service';
import { LocationService } from '../modules/shared/services/location.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AscLayoutComponent', () => {
  let component: AscLayoutComponent;
  let fixture: ComponentFixture<AscLayoutComponent>;
  let localStorageService: jasmine.SpyObj<AscLocalStorage>;
  let genericService: jasmine.SpyObj<AscGenericService>;
  let locationService: jasmine.SpyObj<LocationService>;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    const localStorageSpy = jasmine.createSpyObj('AscLocalStorage', ['get', 'save']);
    const genericServiceSpy = jasmine.createSpyObj('AscGenericService', ['get', 'post']);
    const locationServiceSpy = jasmine.createSpyObj('LocationService', ['getPosition', 'getCityName']);

    TestBed.configureTestingModule({
      declarations: [AscLayoutComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule  // Import this for animations used by Angular Material
      ],
      providers: [
        { provide: AscLocalStorage, useValue: localStorageSpy },
        { provide: AscGenericService, useValue: genericServiceSpy },
        { provide: LocationService, useValue: locationServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AscLayoutComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(AscLocalStorage) as jasmine.SpyObj<AscLocalStorage>;
    genericService = TestBed.inject(AscGenericService) as jasmine.SpyObj<AscGenericService>;
    locationService = TestBed.inject(LocationService) as jasmine.SpyObj<LocationService>;
    httpMock = TestBed.inject(HttpTestingController);

    localStorageService.get.and.returnValue('mockCard');
    locationService.getPosition.and.returnValue(Promise.resolve({
      coords: { latitude: 50, longitude: 10 },
      timestamp: Date.now()
    } as GeolocationPosition));

    fixture.detectChanges();
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and fetch user location on init', () => {
    expect(component.addCardForm).toBeDefined();
    expect(component.addCardForm.controls['name']).toBeDefined();
    expect(component.addCardForm.controls['card']).toBeDefined();
    expect(locationService.getPosition).toHaveBeenCalled();
  });

  it('should call getUserCardInfo if paidCard is available', () => {
    spyOn(component, 'getUserCardInfo').and.stub();
    component.ngOnInit();
    expect(component.getUserCardInfo).toHaveBeenCalledWith('mockCard');
  });

  it('should filter city options based on input', (done) => {
    component.myControl.setValue('Ber');
    component.filteredOptions.subscribe(options => {
      expect(options).toEqual(['Berlin']);
      done();
    });
  });

  it('should submit form and call API', () => {
    component.addCardForm.setValue({ name: 'Test Name', card: '123456' });
    genericService.post.and.returnValue(of({}));
    component.onSubmit(component.addCardForm.value);
    expect(genericService.post).toHaveBeenCalled();
  });

  it('should fetch weather info for the selected city', () => {
    const mockWeatherResponse = {
      location: { name: 'Test City', region: 'Test Region', country: 'Test Country', localtime: '2022-01-01 12:00' },
      current: { temp_c: 20, feelslike_c: 19, humidity: 50, wind_kph: 10, condition: { text: 'Clear', icon: 'icon.png' } }
    };
    component.getWeatherInfo('Test City');
    const req = httpMock.expectOne(`http://api.weatherapi.com/v1/current.json?key=e9a5d3b74bf84418b11193028231901&q=Test City&lang=en`);
    req.flush(mockWeatherResponse);

    expect(component.weatherInfo).toBeDefined();
    expect(component.weatherInfo.locationDetails.name).toBe('Test City');
  });
});
*/