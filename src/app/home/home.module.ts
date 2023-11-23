import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {MatListModule} from '@angular/material/list';
import {RippleModule} from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {AutoCompleteModule} from 'primeng/autocomplete';




const appRoutes: Routes = [
  // {
  //   path: '', component: HomeComponent, children: [
  //     { path: 'about', component: AboutComponent },
  //   ]
  // }
] 

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    RippleModule,
    AccordionModule,
    HttpClientModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
		InputTextareaModule,
		DropdownModule,
    FormsModule,
    ToolbarModule,
    MenuModule,
    SelectButtonModule,
    ToggleButtonModule,
    AutoCompleteModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
