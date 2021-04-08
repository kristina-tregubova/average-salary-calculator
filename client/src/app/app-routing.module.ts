import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorPanelComponent } from './calculator-panel/calculator-panel.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: 'calculator/average', component: CalculatorPanelComponent},
  {path: 'calculator/month', component: CalculatorPanelComponent},
  {path: 'settings', component: SettingsComponent},
  { path: '**', redirectTo: '/calculator/average', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
