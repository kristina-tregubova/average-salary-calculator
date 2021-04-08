import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorPanelComponent } from './calculator-panel/calculator-panel.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: 'calculator', component: CalculatorPanelComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
