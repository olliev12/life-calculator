import { AfterContentInit, Component, ViewChild } from '@angular/core';
import * as AppConfig  from './config/app-config';
import { AppGlobal } from './services/app-global';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  readonly calculators: AppConfig.CalculatorType[] = AppConfig.calculators;
  title = 'life-calculator';

  constructor(public appGlobal: AppGlobal) {
    this.appGlobal.menuOpened.subscribe((menuIsOpened: boolean) => {
      if (this.drawer && menuIsOpened) {
        this.drawer.toggle();
      }
    });
  }

  ngAfterContentInit() {
    this.drawer._animationEnd.subscribe((_animationEnd) => {
      if (_animationEnd?.fromState === 'open' && _animationEnd?.toState === 'void') {
        this.appGlobal.toggleMenu();
      }
    })
  }

  mobileNav() {
    this.appGlobal.noHref();
    this.drawer.close();
    // this.appGlobal.toggleMenu();

  }

}
