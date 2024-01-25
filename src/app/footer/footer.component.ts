import { Component, HostListener } from '@angular/core';
import * as AppConfig  from '../config/app-config';
import { AppGlobal } from '../services/app-global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly pages: AppConfig.CalculatorType[] = AppConfig.pages;
  public menuOpen = false;
  public isMobile = false;

  constructor(public appGlobal: AppGlobal) {
    this.isMobile = window.innerWidth < 767;
  }



  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.appGlobal.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  public checkMobile() {
    this.isMobile = window.innerWidth < 767;
  }
}
