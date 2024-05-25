import { TestBed } from '@angular/core/testing';
import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { TranslateModule, TranslatePipe } from '@ngx-translate/core'; 
import { AscAngularMaterialModule } from '../modules/shared/angular-material.module';
import { AscAppPipeModule } from '../modules/shared/app-pipe.module';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { TableModule } from 'primeng/table'; 
import { PrimeNgSharedModules } from '../modules/shared/prime-ng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GoogleMapsModule } from '@angular/google-maps';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AscSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NgbModule,
        TranslateModule.forRoot(),
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forRoot([]), 
        AscAngularMaterialModule,  
        AscAppPipeModule,
        PrimeNgSharedModules,
        GoogleMapsModule
      ],
      providers: [
        LowerCasePipe, TitleCasePipe, UpperCasePipe, TranslatePipe, ConfirmationService, MessageService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the module', () => {
    const module = TestBed.inject(CommonModule); // Ensuring Angular module setup
    expect(module).toBeTruthy();
  });

  it('should include LowerCasePipe', () => {
    const pipe = TestBed.inject(LowerCasePipe);
    expect(pipe).toBeTruthy();
  });

  it('should include TitleCasePipe', () => {
    const pipe = TestBed.inject(TitleCasePipe);
    expect(pipe).toBeTruthy();
  });

  it('should include UpperCasePipe', () => {
    const pipe = TestBed.inject(UpperCasePipe);
    expect(pipe).toBeTruthy();
  });

  it('should include TranslatePipe', () => {
    const pipe = TestBed.inject(TranslatePipe);
    expect(pipe).toBeTruthy();
  });

  it('should include ConfirmationService', () => {
    const service = TestBed.inject(ConfirmationService);
    expect(service).toBeTruthy();
  });

  it('should include MessageService', () => {
    const service = TestBed.inject(MessageService);
    expect(service).toBeTruthy();
  });
});
