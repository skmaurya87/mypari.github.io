import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';



const routes: Routes = [
  { path: '', component:HomeComponent, children:[
    {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    component: AboutComponent,
  },
    // { path: 'about', component:AboutComponent },
  ]
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes,{ initialNavigation: 'enabledBlocking'})],
  exports: [
    RouterModule,
    HomeModule,
    AboutModule],

})
export class AppRoutingModule { }
