import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Person } from './edrec';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edrec',
  templateUrl: './edrec.component.html',
  styleUrls: ['./edrec.component.css']
})
export class EdrecComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  candidateModel:Person=new Person();
  profileinfo: any;



  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router,private api:ApiService) { }
  form:FormGroup=this.fb.group({
    company:[''],
    password:[''],
    email:[''],
    job:[''],
    exp:['']




  })



  ngOnInit(): void {
    this.Login();
  }
  onEdit(data:any){
    this.candidateModel.id=data.id;
    this.form.controls['company'].setValue(data.company);
    this.form.controls['password'].setValue(data.password);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['job'].setValue(data.job);
    this.form.controls['exp'].setValue(data.exp);

  }

  Login(){
    this.http.get<any>("http://localhost:3000/comments?q="+this.username2).subscribe(res=>{
      this.profileinfo=res;
      console.log(res);
      }
      


      

      )
      
  }
  Update(){
    this.candidateModel.company=this.form.value.company;
    this.candidateModel.password=this.form.value.password;
    this.candidateModel.email=this.form.value.email;
    this.candidateModel.job=this.form.value.job;
    this.candidateModel.exp=this.form.value.exp;
    this.api.updateRec(this.candidateModel,this.candidateModel.id).subscribe(res=>{
      console.log(res);
      alert("Updated successfully");
      this.form.reset();
    })





  }


}
