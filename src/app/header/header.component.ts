import { Component, HostListener } from '@angular/core';
import { AppGlobal } from '../services/app-global';
import * as AppConfig  from '../config/app-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly calculators: AppConfig.CalculatorType[] = AppConfig.calculators;
  public menuOpen: boolean = false;
  public isMobile: boolean = false;

  constructor(public appGlobal: AppGlobal) {
    this.isMobile = window.innerWidth < 767;
  }



  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.appGlobal.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  public checkMobile($event: any) {
    this.isMobile = window.innerWidth < 767;
  }
}
