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
export class AscGenericService extends AscBaseService { 

  /**
   * Creates an instance of AscGenericService.
   * @author mehdi.hayyat
   * @param  {HttpClient} http
   * @param  {AscLocalStorage} localStorage 
   * @param  {AscErrorHandler} [errorHandler]
   * @param  {AscAuthService} [authService]
   * @param  {AscBannerAlertService} [bannerAlertService]
   * @memberof AscGenericService
   */
  constructor(
    protected http: HttpClient,
    protected override localStorage: AscLocalStorage, 
    protected override errorHandler?: AscErrorHandler
  ) {
    super(http);
  }


  /**
   * Send http get request to server.
   * @method get
   * @param url string
   * @param urlParams
   * @param params object
   * @param apiTimeoutParam
   * @author mehdi.hayyat
   */
  public get(url: string, urlParams?: any, params?: any, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    if (urlParams)
      url = this.encodeUrlParams(urlParams, url); 
    return this.__get(`${url}`, params, apiTimeoutParam, ignoreTimeout);
  }


  /**
   * Send http put request to server.
   * @method put
   * @param url string
   * @param putBody object
   * @author mehdi.hayyat
   */
  public put(url: string, putBody: any, urlParams?: any, params?: any, observeResponse?: boolean, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    if (urlParams)
      url = this.encodeUrlParams(urlParams, url); 
    return this.__put(`${url}`, putBody, params, observeResponse, apiTimeoutParam, ignoreTimeout);
  }  

  /**
   * Send http post request to server
   * @method post
   * @param url string
   * @param postBody object
   * @author mehdi.hayyat
   */
  public post(url: string, postBody: any, hasBlobRes?: boolean, observeResponse?: boolean): Observable<any> {  
    return this.__post(`${url}`, postBody, hasBlobRes, observeResponse);
  }  
 

  private encodeUrlParams(urlParams: any[], url: string): string {
    if (urlParams && urlParams.length) {
      urlParams.forEach(param => {
        // url += `/${encodeURIComponent(param)}`;
        url += `/${param}`;
      });
    }
    return url;
  }
}
