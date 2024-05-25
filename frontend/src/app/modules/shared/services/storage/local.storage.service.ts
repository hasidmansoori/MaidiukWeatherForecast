import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

import { AscStorage } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AscLocalStorage extends AscStorage {
  constructor(localStorageService: LocalStorageService) {
    super(localStorageService);
  }

}
