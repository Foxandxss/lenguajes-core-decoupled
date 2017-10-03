import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppSharedModule } from './app.shared.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppSharedModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
