import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmallboxComponent } from './smallbox/smallbox.component';
import { SecHeaderComponent } from './sec-header/sec-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallboxComponent,
    SecHeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
