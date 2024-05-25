import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core'; 
import {AscLocalStorage} from './modules/shared/services/storage/local.storage.service'; 
import { environment } from '../environments/environment';


@Injectable({providedIn: 'root'})
export class AscConfigService {
  key: any;
  constructor(private readonly localStorage: AscLocalStorage, private http?: HttpClient) {
  }

  private static appConfig: any;

  /**
   * This method is return loaded configuration
   * @author mehdi.hayyat
   * @return CONF
   */
  public static getConfig(): any {
    return AscConfigService.appConfig;
  }

  /**
   * This method is to load config and generate backend-url dynamically.
   * //This method is to load Configuration from config file
   * @return Promise<void>
   * @author mehdi.hayyat
   */
  public async loadAppConfig(): Promise<void> { 
    const data = {backendURL: environment.production === true ? location.origin + '/weather/api' : environment.backendURL};
    AscConfigService.appConfig = data;
  } 
}
