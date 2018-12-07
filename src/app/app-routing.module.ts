import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule'
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
