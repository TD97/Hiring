import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Person } from './pass';


@Component({
  selector: 'app-passed',
  templateUrl: './passed.component.html',
  styleUrls: ['./passed.component.css']
})
export class PassedComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  profileinfo:any;
  candidateModel:Person=new Person();



  constructor(private http:HttpClient,private formBuilder:FormBuilder,private api:ApiService,private router:Router) { }
  formval:FormGroup=this.formBuilder.group({
    name:[''],
    user:[''],
    company:[''],
    message:['']
  })


  ngOnInit(): void {
    this.Login3();

  }
  Login3(){
    this.http.get<any>("http://localhost:3000/panel?q="+this.username2).subscribe(res=>{
      this.profileinfo=res;
      }
      


      

      )
      
  


  }
  postCandidateDetails(){
    this.candidateModel.company=this.formval.value.company;
  
    this.candidateModel.name=this.formval.value.name;
    this.candidateModel.user=this.formval.value.user;
    this.candidateModel.company=this.formval.value.company;
    this.candidateModel.message=this.formval.value.message;
  
    this.api.postCandidate5(this.candidateModel).subscribe(res=>{
      console.log(res);
      alert("Reference check ");
      this.formval.reset();
    })
  }
  deleteP(data:any){
    this.api.deleteApplied3(data.id).subscribe(res=>{
      alert("records deleted");
      
    })
  
  }
  
  


}
