import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AscConfigService } from './app-config.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage'; 
import { AscLayoutComponent } from './layouts/layout.component'; 
import { AscSharedModule } from './modules/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

// All Basic Components which are used in Layout
const basicComponents = [
  AppComponent , AscLayoutComponent 
];

// All Basic Modules which are are required to put on root level
const modules = [
  BrowserModule, 
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule, 
  NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive: true }),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient]
    }
  }),
  AscSharedModule 
];

// This function is to initialize Configuration loader function
const appInitializerFn = (appConfig: AscConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};
@NgModule({
  declarations: [...basicComponents],
  imports: [...modules],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AscConfigService]
    }
  ],
  bootstrap: [AppComponent], 
  exports: [TranslateModule]
})
export class AppModule { } 
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './languages/',
    '.json');
}
