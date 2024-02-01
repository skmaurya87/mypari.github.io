import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { AboutComponent } from '../about/about.component';
import { HomeModule } from '../home/home.module';
import {PanelMenuModule} from 'primeng/panelmenu';


const appRoutes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      { path: 'about', component: AboutComponent },
    ]
  }
] 

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    RippleModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    HomeModule,
    PanelMenuModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }





