import { Component } from '@angular/core';
import { Offcanvas, Ripple, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  ngOnInit() {
    initTE({ Offcanvas, Ripple, Dropdown });
  }
}
