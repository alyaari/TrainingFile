import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { SumPipe } from './sum.pipe';
import { CreatePersonComponent } from './create-person/create-person.component';

@NgModule({
  declarations: [					
    AppComponent,
      DetailsPersonComponent,
      StarComponent,
      HomeComponent,
      SumPipe,
     
      CreatePersonComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
