import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatTableModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
