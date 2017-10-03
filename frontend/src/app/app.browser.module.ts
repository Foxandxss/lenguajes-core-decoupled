import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppSharedModule } from './app.shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppSharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
