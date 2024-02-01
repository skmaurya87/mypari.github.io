import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToggleServiceService } from '../allService/toggle-service.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers: [ToggleServiceService],
  
})
export class SidebarComponent implements OnInit {
  isVisible = false;
  menuItems: MenuItem[] = [];

  
    constructor( private toggleService: ToggleServiceService) {

    }

    ngOnInit() {
      this.toggleService.currentToggleState.subscribe((state) => {
        this.isVisible = state;
      });


      this.menuItems = [
        {
          label: 'Dashboard',
          items: [
            { label: 'Default', routerLink: ['about']},
            { label: 'E Commerce'},
            { label: 'Crypto'},
          ],
        },
        {
          label: 'Widget',
          items: [
            { label: 'General'},
            { label: 'Chart'},
          ],
        },
        {
          label: 'Components',
          items: [
            { label: 'Pages'},
            { label: 'Buttons'},
          ],
        },
  

   
      ]

     }
}
