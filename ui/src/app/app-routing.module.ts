import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './modules/public/public.component';
import { PUBLIC_ROUTES } from './modules/public/public.routes';
import { SecureComponent } from './modules/secure/secure.component';
import { SECURE_ROUTES } from './modules/secure/secure.routes';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
