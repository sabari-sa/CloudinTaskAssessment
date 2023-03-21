import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';


import {MatNativeDateModule} from '@angular/material/core';

import { MaterialExampleModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './Layout/nav-header/nav-header.component';
import { SideMenuComponent } from './Layout/side-menu/side-menu.component';
import { ContentViewComponent } from './Layout/content-view/content-view.component';
import { ClientDetailComponent } from './screens/client-detail/client-detail.component';
import { ClientDetailWithIdComponent } from './screens/client-detail-with-id/client-detail-with-id.component';
import { ClientDetailSecretComponent } from './screens/client-detail-secret/client-detail-secret.component';
import { AboutusComponent } from './screens/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    SideMenuComponent,
    ContentViewComponent,
    ClientDetailComponent,
    ClientDetailWithIdComponent,
    ClientDetailSecretComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [ContentViewComponent]
})
export class AppModule { }
