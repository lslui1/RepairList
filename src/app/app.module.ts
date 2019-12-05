import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepairListComponent } from './repairs/repair-list/repair-list.component';
import { RepairJobComponent } from './repairs/repair-job/repair-job.component';

@NgModule({
  declarations: [
    AppComponent,
    RepairListComponent,
    RepairJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
