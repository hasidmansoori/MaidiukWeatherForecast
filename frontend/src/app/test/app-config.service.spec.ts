import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AscConfigService } from '../app-config.service';
import { AscLocalStorage } from '../modules/shared/services/storage/local.storage.service';
import { environment } from '../../environments/environment';

describe('AscConfigService', () => {
  let service: AscConfigService;
  let httpMock: HttpTestingController;
  let localStorageMock: any;

  beforeEach(() => {
    localStorageMock = jasmine.createSpyObj('AscLocalStorage', ['get', 'set']);

    // Mock the environment configuration for the test
    (environment as any).production = false;
    (environment as any).backendURL = 'http://localhost/weather/api';

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AscConfigService,
        { provide: AscLocalStorage, useValue: localStorageMock }
      ]
    });

    service = TestBed.inject(AscConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load app config correctly', async () => {
    const mockConfig = { backendURL: 'http://localhost/weather/api' };
    await service.loadAppConfig();
    expect(AscConfigService.getConfig()).toEqual(mockConfig);
  });
});
