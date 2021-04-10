import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './calculator-panel/form/form.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ResultsComponent } from './calculator-panel/results/results.component';
import { SettingsComponent } from './settings/settings.component';
import { CalculatorPanelComponent } from './calculator-panel/calculator-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorPanelComponent,
    FormComponent,
    PageFooterComponent,
    ResultsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
