import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router, CanActivate, Route } from '@angular/router';
import { StorageType } from '../common/enum/storage.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate() {
    if (this.storageService.get(StorageType.session, 'auth')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean {
    if (this.storageService.get(StorageType.session, 'auth')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
