import { Component, ViewEncapsulation} from '@angular/core';
import { ThemeService } from '../theme.service';
import { MenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class HomeComponent {
  name = 'Angular 5';

  themes = [
    {label: 'Saga Blue', id: 'saga-blue'},
    {label: 'Arya Blue', id: 'arya-blue'},
    {label: 'MD Light Indigo', id: 'md-light-indigo'},
    {label: 'MD Dark Indigo', id: 'md-dark-indigo'},
    {label: 'BS4 Light', id: 'bootstrap4-light-purple'},
    {label: 'BS4 Dark', id: 'bootstrap4-dark-purple'},
  ]


  constructor(private themeService: ThemeService) {

  }
  

  selectedTheme :{id: string; label: string, } = this.themes[0]
  changeTheme(theme: string){
    this.themeService.switchTheme(theme);
  }

  ngOnInit() {
   
  }
  
}
