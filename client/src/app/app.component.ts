import { Component, OnInit } from '@angular/core';
import { Person } from './models/IPerson';
import { PersonService } from './Person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Tour of Heroes';


}
