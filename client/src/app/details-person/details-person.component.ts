import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/IPerson';
import { PersonService } from '../Person.service';
 

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {

  constructor(private route:ActivatedRoute,private personService:PersonService) { }
@Input() person:any={id:0,name:''};

id=0;
  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
   let type=this.route.snapshot.params["type"];
    //this.id=this.route.snapshot.params["id"];
  this.person=this.personService.getPresonById(this.id)

  }

}
