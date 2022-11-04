import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

import {Trisha1} from'./edit';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.substr(1,7);
  user2:any=this.username.replaceAll('"','');
  candidateModel:Trisha1=new Trisha1();

  
  profileinfo: any;

  constructor(private http:HttpClient,private router:Router,private fb:FormBuilder,private api:ApiService) { }
  edit:FormGroup=this.fb.group({
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

  

  ngOnInit(): void {
    this.Login();
    console.log(this.user2);
  }
  onEdit(data:any){
    this.candidateModel.id=data.id;
    this.edit.controls['mail'].setValue(data.mail);
    this.edit.controls['mobile'].setValue(data.mobile);
    this.edit.controls['department'].setValue(data.department);
    this.edit.controls['gender'].setValue(data.gender);
    this.edit.controls['hometown'].setValue(data.hometown);
    this.edit.controls['password'].setValue(data.password);
    this.edit.controls['interests'].setValue(data.interests);
    this.edit.controls['username'].setValue(data.username);
    this.edit.controls['langauge'].setValue(data.langauge);
    this.edit.controls['experience'].setValue(data.experience);









  
  }
  postCandidateDetails(){
    this.candidateModel.username=this.edit.value.username;


    this.candidateModel.password=this.edit.value.password;
    this.candidateModel.mail=this.edit.value.mail;
    this.candidateModel.gender=this.edit.value.gender;
    this.candidateModel.mobile=this.edit.value.mobile;
    this.candidateModel.hometown=this.edit.value.hometown;
    this.candidateModel.interests=this.edit.value.interests;
    this.candidateModel.experience=this.edit.value.experience;
    this.candidateModel.maritalStatus=this.edit.value.maritalStatus;
    this.candidateModel.nationality=this.edit.value.nationality;
    this.candidateModel.languages=this.edit.value.langauges;
    this.candidateModel.currentLocation=this.edit.value.currentLocation;
    this.candidateModel.lastjobexp=this.edit.value.lastjobexp;
    this.candidateModel.lastjobDesig=this.edit.value.lastjobDesig;
    this.candidateModel.department=this.edit.value.department;
    this.candidateModel.reasonsforleaving=this.edit.value.reasonsforleaving;













    this.api.updateEmp(this.candidateModel,this.candidateModel.id).subscribe(res=>{
      console.log(res);
      alert("Updated successfully");
      this.edit.reset();
    })



  }

  
  Login(){
    this.http.get<any>("http://localhost:3000/signup?q="+this.user2).subscribe(res=>{
      this.profileinfo=res;
      }
      


      

      )
      
  }
  Logout(){
    this.router.navigate(['post1']);
  }


}
