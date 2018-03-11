import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { MaximumWidgetDirective } from './maximum-widget.directive';
import { WidgetComponent } from './widget-component/widget.component';
import { GridStackModule } from 'ng4-gridstack';

@NgModule({
  declarations: [
    AppComponent, 
    MaximumWidgetDirective,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    GridStackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
