import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Person } from './call';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-called',
  templateUrl: './called.component.html',
  styleUrls: ['./called.component.css']
})
export class CalledComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  Info: any;
  candidateModel:Person=new Person();



  constructor(private http:HttpClient,private router:Router,private fb:FormBuilder,private api:ApiService) { }
  formval:FormGroup=this.fb.group({
    company:[''],
    name:[''],
    user:[''],
    email:[''],
    date:[''],
    venue:['']
  })


  ngOnInit(): void {
    this.Call();
  }
  Call(){
    this.http.get<any>("http://localhost:3000/shorlist?q="+this.username2).subscribe(res=>{
      this.Info=res;

  });
}
postCandidateDetails(){
  this.candidateModel.company=this.formval.value.company;

  this.candidateModel.name=this.formval.value.name;
  this.candidateModel.user=this.formval.value.user;
  this.candidateModel.email=this.formval.value.email;
  this.candidateModel.date=this.formval.value.date;
  this.candidateModel.venue=this.formval.value.venue;

  this.api.postCandidate4(this.candidateModel).subscribe(res=>{
    console.log(res);
    alert("Called successfully");
    this.formval.reset();
  })
}


}
