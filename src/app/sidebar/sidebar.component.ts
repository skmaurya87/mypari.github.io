import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToggleServiceService } from '../allService/toggle-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers: [ToggleServiceService],
  
})
export class SidebarComponent implements OnInit {
  isVisible = false;

  
    constructor( private toggleService: ToggleServiceService) {}

    ngOnInit() {
      this.toggleService.currentToggleState.subscribe((state) => {
        this.isVisible = state;
      });
     }
}
