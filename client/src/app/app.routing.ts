import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }  ,
  { path: 'person', component: DetailsPersonComponent }, 
   { path: 'create', component: CreatePersonComponent },
  { path: 'person/:id', component: CreatePersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }