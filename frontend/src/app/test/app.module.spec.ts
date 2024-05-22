import { TestBed } from '@angular/core/testing';
import { APP_INITIALIZER } from '@angular/core';
import { AppModule } from '../app.module';
import { AscConfigService } from '../app-config.service';

describe('AppModule', () => {
  let appConfigServiceSpy: jasmine.SpyObj<AscConfigService>;

  beforeEach(() => {
    appConfigServiceSpy = jasmine.createSpyObj('AscConfigService', ['loadAppConfig']);

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: AscConfigService, useValue: appConfigServiceSpy },
        {
          provide: APP_INITIALIZER,
          useFactory: (configService: AscConfigService) => () => configService.loadAppConfig(),
          deps: [AscConfigService],
          multi: true
        }
      ]
    }).compileComponents();
  });

  it('should create the app module', () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });
});
