
import { NgModule } from '@angular/core';
import {
  AscSecretPipe, 
  SafePipe
} from './pipes/app.pipe';


const pipes = [AscSecretPipe,SafePipe
];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes],
  providers: [
    ...pipes
    // MaskMobileNumberPipe, OtpMaskingPipe, MaskEmailAddressPipe, DateFormatPipe
  ]
})


export class AscAppPipeModule { }