import { TestBed } from '@angular/core/testing';
import { AscAppPipeModule } from '../modules/shared/app-pipe.module';
import { AscSecretPipe, SafePipe } from '../modules/shared/pipes/app.pipe';

describe('AscAppPipeModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AscAppPipeModule]
    }).compileComponents();
  });

  it('should create the module', () => {
    const module = TestBed.inject(AscAppPipeModule);
    expect(module).toBeTruthy();
  });

  it('should include AscSecretPipe', () => {
    const pipe = TestBed.inject(AscSecretPipe);
    expect(pipe).toBeTruthy();
  });

  it('should include SafePipe', () => {
    const pipe = TestBed.inject(SafePipe);
    expect(pipe).toBeTruthy();
  });
});
