import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmallboxComponent } from './smallbox/smallbox.component';
import { SecHeaderComponent } from './sec-header/sec-header.component';
import { ProjectComponent } from './project/project.component';
import { InfoTableComponent } from './info-table/info-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallboxComponent,
    SecHeaderComponent,
    ProjectComponent,
    InfoTableComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
