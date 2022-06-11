import { Injectable } from '@angular/core';
import { StorageType } from '../common/enum/storage.enum';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  prefix = 'nav';

  save(type: StorageType, key: string, value: string) {
    if (type === StorageType.local) {
      localStorage.setItem(this.prefix + key, this.encryptBase64(value));
    } else if (type === StorageType.session) {
      sessionStorage.setItem(this.prefix + key, this.encryptBase64(value));
    }
  }

  get(type: StorageType, key: string) {
    if (type === StorageType.local) {
      let item = localStorage.getItem(this.prefix + key)
      if (item) {
        return this.decryptBase64(item);
      }
      return null;
    }
    if (type === StorageType.session) {
      let item = sessionStorage.getItem(this.prefix + key);
      if (item) {
        return this.decryptBase64(item);
      }
      return null;
    }
    return null;
  }

  remove(type: StorageType, key: string) {
    if (type === StorageType.local) {
      localStorage.removeItem(this.prefix + key);
    }
    if (type === StorageType.session) {
      sessionStorage.removeItem(this.prefix + key);
    }
  }

  encryptBase64(stringData: string) {
    return btoa(stringData);
  }
  decryptBase64(stringData: string) {
    return atob(stringData);
  }
}
