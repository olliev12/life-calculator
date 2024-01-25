import { Component, HostListener } from '@angular/core';
import { AppGlobal } from '../services/app-global';
import * as AppConfig  from '../config/app-config';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly calculators: AppConfig.CalculatorType[] = AppConfig.calculators;
  public menuOpen = false;
  public isMobile = false;

  constructor(public appGlobal: AppGlobal) {
    this.isMobile = getWindow().innerWidth < 767;
  }



  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.appGlobal.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  public checkMobile() {
    this.isMobile = getWindow().innerWidth < 767;
  }
}
