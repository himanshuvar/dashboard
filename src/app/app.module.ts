import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DropMenuModule, PanelModule, SelectButtonModule, ButtonModule, InputTextModule, ConfirmationService,ConfirmDialogModule } from './components/common/api';
import { ProgressBarModule } from './components/progressbar/progressbar';
import { ScrollPanelModule } from './components/scrollpanel/scrollpanel';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BucketService } from './business/block/buckets.service';
import { HttpService } from './shared/service/Http.service';
import { JoyrideModule } from 'ngx-joyride';

import { MessagesModule } from './components/messages/messages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MessagesModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    JoyrideModule.forRoot(),
    DropMenuModule,
    PanelModule,
    ScrollPanelModule,
    SelectButtonModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    ConfirmDialogModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy }, BucketService, HttpService, ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }