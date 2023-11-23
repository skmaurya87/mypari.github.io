import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { AboutComponent } from '../about/about.component';
import { HomeModule } from '../home/home.module';



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
    AutoCompleteModule,
    HomeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }


// @NgModule({
//   declarations: [
//     SidebarComponent
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class SidebarModule { }




