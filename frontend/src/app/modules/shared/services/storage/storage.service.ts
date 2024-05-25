import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

export class AscStorage {
  private serviceItem: LocalStorageService | SessionStorageService;

  constructor(serviceItem: LocalStorageService | SessionStorageService) {
    this.serviceItem = serviceItem;
  }

  /**
   * To Observe the change in variable
   * @author mehdi.hayyat
   * @param key :string
   */
  observe(key: string): Observable<any> {
    return this.serviceItem.observe(key);
  }


  /**
   * Save data in storage
   * @author mehdi.hayyat
   * @param key:string
   * @param value:any
   */
  save(key: string, value: any): void {
    this.serviceItem.store(key, value);
  }

  /**
   * Save list of data in storage.
   * @author mehdi.hayyat
   * @param data: Array<{ key: string, value: any }>
   */
  saveAll(data: Array<{ key: string, value: any }>): void {
    data.forEach(d => {
      this.save(d.key, d.value);
    });
  }

  /**
   * Remove data in storge by key.
   * @author mehdi.hayyat
   * @param key:string
   */
  remove(key: string): void {
    this.serviceItem.clear(key);
  }

  /**
   * Remove data in storage by list of key.
   * @author mehdi.hayyat
   * @param data:any[]
   */
  removeAll(data: any[]): void {
    data?.forEach(d => {
      this.remove(d);
    });
  }

  /**
   * Returns data form storage by key.
   * @author mehdi.hayyat
   * @param key:string
   */
  get<Type>(key: string): Type {
    return this.serviceItem.retrieve(key) as Type;
  }

  /**
   * Returns data form storage by list of key.
   * @author mehdi.hayyat
   * @param data:Array
   */
  getAll(data: []): void {
    data.forEach(d => {
      this.get<any>(d);
    });
  }

  /**
   * Returns true if value exist.
   * @author mehdi.hayyat
   * @param key:string
   */
  has(key: string): boolean {
    return !(this.get(key) === null || this.get(key) === undefined);
  }


  /**
   * Clear Local Storage
   * @author mehdi.hayyat
   */
  public clear(): void {
    this.serviceItem.clear();
  }
}
