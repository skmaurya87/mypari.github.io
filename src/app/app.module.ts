import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple'; 
const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  // ......
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    BrowserAnimationsModule,
    RippleModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
