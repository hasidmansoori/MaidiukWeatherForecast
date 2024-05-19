import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

import { AscStorage } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AscSessionStorage extends AscStorage {
  constructor(sessionStorageService: SessionStorageService) {
    super(sessionStorageService);
  }
}
