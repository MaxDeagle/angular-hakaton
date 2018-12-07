import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule',
        canActivate: [AuthGuard]
    },
    {
      path: 'authorization',
      loadChildren: './authorization/authorization.module#AuthorizationModule'
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
