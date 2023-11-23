import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [] 

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
