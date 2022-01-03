import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/IPerson';
import { PersonService } from '../Person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myservice:PersonService,private router:Router){

  }
    ngOnInit(): void {
     this.myservice.getPresons<Person[]>().subscribe((res)=>{
       debugger
         this.data=res;
      });
    }
    
    person:Person={id:0,name:"",rate:0}
     data:Person[]=[];
     
  selected:Person={id:0,name:'',rate:0};
  products=[{price:354,id:9},{price:889,id:2}];
     myfun(){
     
     }
     navigateTo(item:Person){

this.router.navigate(['person',item.id,{type:3,name:98}])

     }
     addPerson(){
       this.data.push({id:this.person.id,name:this.person.name,rate:0})
     }
  
     selectPerson(x:Person){
       this.person=x;
       this.selected=x;
     }
  
  onRatingChange(event:number,item:Person)
  {
  debugger
  item.rate=event;
  }

}
