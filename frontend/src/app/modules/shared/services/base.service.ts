import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, finalize, map, mergeMap, timeout } from 'rxjs/operators';
 
import { AscApiPaths } from '../helpers/api-paths'; 
import { AscErrorHandler } from '../helpers/error-handler';
import { AscCustomHttpParamEncoder } from '../helpers/http-params-encoder';
import { AscLocalStorage } from './storage/local.storage.service'; 
import { AscConfigService } from '../../../app-config.service';

interface RequestConfig {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
  responseType?: 'json';
}

@Injectable({ providedIn: 'root' })
export class AscBaseService {
  private CONFIG = AscConfigService.getConfig();
  private apiUrl = this.CONFIG.backendURL;
  private config: RequestConfig;
  public error: Subject<any> = new Subject();

  constructor(
    protected httpClient: HttpClient,
    protected localStorage?: AscLocalStorage, 
    protected errorHandler?: AscErrorHandler
  ) {
    this.config = {
      headers: new HttpHeaders(),
      params: new HttpParams({ encoder: new AscCustomHttpParamEncoder() })
    };
  }


  /**
   * This function is to append Token with the header of API call
   * @author mehdi.hayyat
   * @private
   * @memberof AscBaseService
   */
  private appendToken(): void {
    this.config = {
      headers: new HttpHeaders(),
      params: new HttpParams({ encoder: new AscCustomHttpParamEncoder() })
    }; 
    let language: string | undefined = this.localStorage?.get('en-US');
    
    if (language) {
      this.config.headers = this.config?.headers?.append('X-Lang', language);
    }
  }

  /**
   * This function is to append parameters with GET call
   * @author mehdi.hayyat
   * @private
   * @param {any} params
   * @memberof AscBaseService
   */
  private appendParams(params: any): void {
    this.config.params = new HttpParams({ encoder: new AscCustomHttpParamEncoder() });
    Object.keys(params).forEach((key: string) => {
      this.config.params = this.config?.params?.append(key, params[key]);
    });
  }

  /**
   * This method is for handling Server Errors
   * @author mehdi.hayyat
   * @private
   * @param  {any} error
   * @return *
   * @memberof AscBaseService
   */
  private handleError(error: HttpErrorResponse): any {
    this.errorHandler?.handleError(error);
    return throwError(error);
  }
 

  /**
   * This Wrapper is for GET Rest API call
   * @author mehdi.hayyat
   * @protected
   * @param  {string} url
   * @param  {*} [params]
   * @param apiTimeoutParam
   * @return Observable<any>
   * @memberof AscBaseService
   */
  protected __get(url: string, params?: any, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    this.appendToken();
    return this.GET(url, params, apiTimeoutParam, ignoreTimeout); 
  }

  /**
   * This method is for GET Rest API call
   * @author mehdi.hayyat
   * @private
   * @param  {string} url
   * @param  {*} [params]
   * @param apiTimeoutParam
   * @return Observable<any>
   * @memberof AscBaseService
   */
  private GET(url: string, params?: any, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    if (params) {
      this.appendParams(params);
    }
    if (ignoreTimeout) {
      return this.httpClient.get(`${this.apiUrl}/${url}`, this.config)
        .pipe(catchError(
          err => this.handleError(err)), 
        );
    }
    else {
      return this.httpClient.get(`${this.apiUrl}/${url}`, this.config)
        .pipe(catchError(
          err => this.handleError(err)), 
        );
    }
  }

  /**
   * This Wrapper is for PUT Rest API call
   * @author mehdi.hayyat
   * @protected
   * @param  {string} url
   * @param  {*} putBody
   * @return Observable<any>
   * @memberof AscBaseService
   */
  protected __put(url: string, putBody: any, params?: any, observeResponse?: boolean, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    this.appendToken();
    return this.PUT(url, putBody, params, observeResponse, apiTimeoutParam, ignoreTimeout);
  }


  /**
   * This method is for PUT Rest API call
   * @author mehdi.hayyat
   * @private
   * @param  {string} url
   * @param  {*} putBody
   * @return Observable<any>
   * @memberof AscBaseService
   */
  private PUT(url: string, putBody: any, params?: any, observeResponse?: boolean, apiTimeoutParam?: number, ignoreTimeout?: boolean): Observable<any> {
    if (params) {
      this.appendParams(params);
    }
    const postConfig = { ...this.config };

    if (observeResponse) {
      // this line is to observe status code when there is no response in body
      postConfig.observe = 'response' as 'body';
    }
    if (ignoreTimeout) {
      return this.httpClient.put(`${this.apiUrl}/${url}`, putBody, postConfig)
        .pipe(catchError(
          err => this.handleError(err)),
          finalize(() => { 
          })
        );
    }
    else {
      return this.httpClient.put(`${this.apiUrl}/${url}`, putBody, postConfig)
        .pipe(catchError(
          err => this.handleError(err)),
          finalize(() => { 
          })
        );
    }
  } 

  /**
   * This Wrapper is for POST Rest API call
   * @author mehdi.hayyat
   * @protected
   * @param  {string} url
   * @param  {any} postBody
   * @param  {boolean} [hasBlobRes]
   * @return Observable<any>
   * @memberof AscBaseService
   */
  protected __post(url: string, postBody: any, hasBlobRes?: boolean, observeResponse?: boolean): Observable<any> {
    this.appendToken();
    return this.POST(url, postBody, hasBlobRes, observeResponse);

  }

  /**
   * This method is for POST Rest API call
   * @author mehdi.hayyat
   * @private
   * @param  {string} url
   * @param  {*} postBody
   * @param  {boolean} [hasBlobRes]
   * @return Observable<any>
   * @memberof AscBaseService
   */
  private POST(url: string, postBody: any, hasBlobRes?: boolean, observeResponse?: boolean): Observable<any> {
    const postConfig = { ...this.config };
    if (hasBlobRes) {
      postConfig.responseType = 'blob' as 'json';
    }

    if (observeResponse) {
      // this line is to observe status code when there is no response in body
      postConfig.observe = 'response' as 'body';
    }

    return this.httpClient.post(`${this.apiUrl}/${url}`, postBody, postConfig)
      .pipe(catchError(
        err => this.handleError(err)),
        finalize(() => {
          const body = {
            error: true,
            url: url
          }
          this.error.next(body); 
        })
      );
  }  
 
}


