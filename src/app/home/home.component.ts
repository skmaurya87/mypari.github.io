import { Component, ViewEncapsulation} from '@angular/core';
import { ThemeService } from '../theme.service';
import { MenuItem, SelectItem } from 'primeng/api';
import { ToggleServiceService } from '../allService/toggle-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class HomeComponent {
  name = 'Angular 5';
  checked1: boolean = false;
  navIcon: boolean = false;
  toggleNavIcon : boolean = false;
  htmlElement: any;

  themes = [
    {label: 'Light', id: 'saga-blue'},
    {label: 'Dark', id: 'arya-blue'},
    {label: 'MD Light Indigo', id: 'md-light-indigo'},
    {label: 'MD Dark Indigo', id: 'md-dark-indigo'},
    {label: 'BS4 Light', id: 'bootstrap4-light-purple'},
    {label: 'BS4 Dark', id: 'bootstrap4-dark-purple'},
  ]
  document: any;


  constructor(private themeService: ThemeService,  private toggleService: ToggleServiceService) {


  }
  

  selectedTheme :{id: string; label: string, } = this.themes[0]
  changeTheme(){
    if(this.checked1 == true){
      this.themeService.switchTheme('arya-blue');
    }
    else{
      this.themeService.switchTheme('saga-blue');
    }
  }
  

  onClick() {
  this.document.querySelector('html');
    this.htmlElement.classList.toggle('dark');
  }

  toggleSidebar() {
    this.toggleService.toggle();
    this.navIcon = !this.navIcon;
  }

  

  ngOnInit() {
   
  }
  
}
