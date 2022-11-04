import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import {Trisha} from'./emp';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.substr(1,7);
  user2:any=this.username.replaceAll('"','');
  candidateModel:Trisha=new Trisha();

  
  profileinfo: any;

  constructor(private http:HttpClient,private router:Router,private fb:FormBuilder,private api:ApiService) { }
  edit:FormGroup=this.fb.group({
    "mail":[''],
    "mobile":['']
  })

  ngOnInit(): void {
    this.Login();
    console.log(this.user2);
  }
  onEdit(data:any){
    this.candidateModel.id=data.id;
    this.edit.controls['mail'].setValue(data.mail);
    this.edit.controls['mobile'].setValue(data.mobile);
  
  }
  postCandidateDetails(){
    this.candidateModel.mail=this.edit.value.mail;
    this.candidateModel.mobile=this.edit.value.mobile;
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
