import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HighlightRowDirective } from './employee/highlight-row.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HighlightRowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
