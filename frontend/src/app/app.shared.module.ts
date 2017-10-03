import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LenguajeDetailsComponent } from './Lenguajes/lenguaje-details.component';
import { LenguajeListComponent } from './Lenguajes/lenguaje-list.component';
import { LenguajeComponent } from './Lenguajes/lenguaje.component';
import { RatingPipe } from './shared/rating.pipe';
import { LenguajeService } from './shared/lenguaje.service';

@NgModule({
  declarations: [
    AppComponent,
    LenguajeListComponent,
    LenguajeDetailsComponent,
    LenguajeComponent,
    RatingPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: '/lenguajes', pathMatch: 'full' },
        { path: 'lenguajes', component: LenguajeListComponent },
        { path: 'lenguajes/:id', component: LenguajeDetailsComponent },
        { path: 'admin', loadChildren: './admin/admin.module#AdminModule' } // No LazyLoading with CLI yet :(
    ])
  ],
  providers: [ LenguajeService ],
  bootstrap: [ AppComponent ]
})
export class AppSharedModule { }
