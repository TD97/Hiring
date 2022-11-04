import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Person } from './seek';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Person1 } from './seek1';
import {Person2} from './seek2';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {
  headers=['SeekerUserName','SeekerMail','SeekerName','Seekerskills','Seekercv'];

  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  seekersInfo: any;
  candidateModel:Person=new Person();
  candidateModel1:Person1=new Person1();
  candidateModel2:Person2=new Person2();




  notapplied:any;
  person: any;



  constructor(private http:HttpClient,private router:Router,private formBuilder:FormBuilder,private api:ApiService) { }
  formval:FormGroup=this.formBuilder.group({
    company:[''],
    name:[''],
    user:[''],
    email:[''],
    date:[''],
    venue:['']
  })
  formval1:FormGroup=this.formBuilder.group({
    name:[''],
    user:[''],
  reject:[''],
  company:['']
  })
  formval2:FormGroup=this.formBuilder.group({
    name:[''],
    user:[''],
  screening:[''],
  company:['']
  })




  ngOnInit(): void {
    this.Login();

  }
  Login(){
    this.http.get<any>("http://localhost:3000/appliedjobs?q="+this.username2).subscribe(res=>{
      this.seekersInfo=res;
  })}

  call_for_interview(){
    
        this.http.post<any>("http://localhost:3000/job2",this.seekersInfo).subscribe(res=>{
          alert('called for interview');
        })
  
  
    
  }
  postCandidateDetails(){
    this.candidateModel.company=this.formval.value.company;

    this.candidateModel.name=this.formval.value.name;
    this.candidateModel.user=this.formval.value.user;
    this.candidateModel.email=this.formval.value.email;
    this.candidateModel.date=this.formval.value.date;
    this.candidateModel.venue=this.formval.value.venue;

    this.api.postCandidate1(this.candidateModel).subscribe(res=>{
      console.log(res);
      alert("Shorlisted successfully");
      this.formval.reset();
    })
  }

  
  
  reject(){
    this.candidateModel1.name=this.formval1.value.name;
    this.candidateModel1.user=this.formval1.value.user;
    this.candidateModel1.reject=this.formval1.value.reject;
    this.candidateModel1.company=this.formval1.value.company;

    this.api.postCandidate2(this.candidateModel1).subscribe(res=>{
      console.log(res);
      alert("Rejected");
      this.formval1.reset();
    })

  }
  screen(){
    this.candidateModel2.name=this.formval2.value.name;
    this.candidateModel2.user=this.formval2.value.user;
    this.candidateModel2.screening=this.formval2.value.screening;
    this.candidateModel2.company=this.formval2.value.company;

    this.api.postCandidate3(this.candidateModel2).subscribe(res=>{
      console.log(res);
      alert("Application sent for screening");
      this.formval2.reset();
    })

  }

  Logout(){
    this.router.navigate(['dash']);
  }
  

}
