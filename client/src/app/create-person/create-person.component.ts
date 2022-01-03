import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/IPerson';
import { PersonService } from '../Person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  person: any = { id: 0, name: '', rate: 0 };

  constructor(private myservive: PersonService, private route: ActivatedRoute, private router: Router) { }
  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    id: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required, Validators.max(5)])
  });

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    if (id > 0) {
      this.person = this.myservive.getPresonById(id);
      this.reset(this.person)
    }
    else {
      this.reset();
    }
    // this.route.params.subscribe(par=>{

    //   id=par["id"]
    // })


  }
  create() {
    debugger
    if (this.myForm.valid) {
      this.myservive.addPreson(this.myForm.value).subscribe(res=>{
        this.reset();
        this.router.navigate(['/'])
      },
     err=>{

      alert("خطاء");
      console.log(err)
     }
      
      );
      
    }

  }


  reset(prseon?: Person) {
    if (prseon) {
      this.myForm = new FormGroup({
        name: new FormControl(this.person.name, [Validators.required, Validators.maxLength(60)]),
        id: new FormControl(this.person.id, [Validators.required]),
        rate: new FormControl(this.person.rate, [Validators.required, Validators.max(5)])
      })
    }
    else {
      this.myForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        id: new FormControl('', [Validators.required]),
        rate: new FormControl('', [Validators.required, Validators.max(5)])
      })
    }
  }
  public validateControl = (controlName: string) => {
    if (this.myForm.controls[controlName].invalid && this.myForm.controls[controlName].touched)
      return true;
    return false;
  }
  public hasError = (controlName: string, errorName: string) => {
    if (this.myForm.controls[controlName].hasError(errorName))
      return true;
    return false;
  }

}
