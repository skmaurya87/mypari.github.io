import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToggleServiceService {
  private visible: boolean = false;

  constructor() { }


  private toggleSource = new BehaviorSubject<boolean>(false);
  currentToggleState = this.toggleSource.asObservable();

  toggle() {
    this.toggleSource.next(!this.toggleSource.value);
  }

 


  isVisible() {
    return this.visible;
  }


  
}
