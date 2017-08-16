import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InsComponent } from './ins/ins.component';
import { ProgComponent } from './prog/prog.component';
import { PartnerComponent } from './partner/partner.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HttpServiceService } from './http-service.service';
import { environment } from '../environments/environment';

const appRoutes: Routes = [{ 
    path: 'a-propos',
    component: AboutComponent
  },
  { 
    path: 'programmation',
    component: ProgComponent
  },
  { 
    path: 'inscription',
    component: InsComponent
  },
  { 
    path: 'gallerie',
    component: GalleryComponent
  },
  { 
    path: 'forum',
    component: ForumComponent
  },
  { 
    path: 'partenaires',
    component: PartnerComponent
  },
  {
    path: 'bibliotheque',
    component: BiblioComponent,
    data: { title: 'Bibliotèque' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProgComponent,
    InsComponent,
    GalleryComponent,
    ForumComponent,
    PartnerComponent,
    BiblioComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdInputModule,
    AgmCoreModule.forRoot({
      apiKey: environment.Gmaps_apikey
    }),
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
      // ,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
