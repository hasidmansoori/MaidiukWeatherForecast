import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Error} from '../models/error.model';
  
import {AscLocalStorage} from '../services/storage/local.storage.service'; 

@Injectable({providedIn: 'root'})
export class AscErrorHandler { 
  constructor( 
    private readonly router: Router,
    private readonly localStorage: AscLocalStorage 
  ) {
  }

  /**
   * This method is to handle server errors
   * and to generate notification in selected Language
   * and to navigate relevant pages
   * @param errorResponse :
    * @author mehdi.hayyat
   */
  public handleError(errorResponse: any): void {
    this.showErrorMessage(errorResponse);
    this.hideLoader();
  }

  /**
   * This method is to show error message coming from API.
   * @author mehdi.hayyat
   * @private
   * @param  {*} errorResponse
   * @return {void}@memberof AscErrorHandler
   */
  private showErrorMessage(errorResponse: any) { 
  } 

  private hideLoader() { 
  }
}
