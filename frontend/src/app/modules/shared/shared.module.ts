import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { TranslateModule, TranslatePipe } from '@ngx-translate/core'; 
import { AscAngularMaterialModule } from './angular-material.module';
import { AscAppPipeModule } from './app-pipe.module';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { TableModule } from 'primeng/table'; 
import { PrimeNgSharedModules } from './prime-ng.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GoogleMapsModule } from '@angular/google-maps';
// All Shared modules
const modules = [ 
  CommonModule,
  NgbModule,
  TranslateModule,
  FormsModule, 
  ReactiveFormsModule,
  RouterModule, 
  AscAngularMaterialModule,  
  AscAppPipeModule,
  PrimeNgSharedModules,
  GoogleMapsModule,
]; 

// for date time picker
export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'hh:mm a',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
};

@NgModule({
  declarations: [],

  imports: [...modules],

  exports: [
    ...modules
  ],
  providers: [
    LowerCasePipe, TitleCasePipe, UpperCasePipe, TranslatePipe,ConfirmationService, MessageService,
  ]  
})
export class AscSharedModule {
}
