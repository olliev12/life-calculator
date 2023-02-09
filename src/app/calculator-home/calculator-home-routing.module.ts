import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorHomeComponent } from './calculator-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: ':type',
    component: CalculatorHomeComponent
  },
  {
    path: ':type/:child',
    component: CalculatorHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorHomeRoutingModule { }
