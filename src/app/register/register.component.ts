import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationsuccess:any;
  regisfail:any;
  regisserver:any;
  seekerservice:any;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  EmpRegisterForm:FormGroup=this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),Validators.minLength(8)])],
    mail:['',Validators.compose([Validators.required,Validators.email])],
    gender: ['',Validators.required],
    mobile: ['',Validators.required],
    hometown: [''],
    interests: [''],
    experience: [''],
    maritalStatus: ['',Validators.required],
    nationality: [''],
    languages: [''],
    currentLocation: [''],
    lastjobexp: ['',Validators.required],
    lastjobDesig: ['',Validators.required],
    department: [''],
    reasonsforleaving: ['']
    });
;
  ngOnInit() {
  }
  registeremployee()
  {
    this.http.post<any>("http://localhost:3000/signup",this.EmpRegisterForm.value).subscribe(res=>{alert('signup succeessful');this.EmpRegisterForm.reset();
    this.router.navigate(['emplog']);
}
  )
}
}














    

