import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Person } from './bcv';


@Component({
  selector: 'app-bcv',
  templateUrl: './bcv.component.html',
  styleUrls: ['./bcv.component.css']
})
export class BcvComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  Info: any;
  candidateModel:Person=new Person();



  constructor(private api:ApiService,private http:HttpClient,private router:Router,private fb:FormBuilder) { }
  formval:FormGroup=this.fb.group({
    company:[''],
    name:[''],
    user:[''],
    email:[''],
  });
  formval1:FormGroup=this.fb.group({
    company:[''],
    name:[''],
    user:[''],
    verification:[''],
    date:['']
  })


  ngOnInit(): void {
    this.Log();
  }
  sendApp()
  {
    this.http.post<any>("http://localhost:3000/onboard",this.formval1.value).subscribe(res=>{alert('Shared ');this.formval1.reset();
    this.router.navigate(['dash']);

  }
    )
}
    
  


  onEdit(data:any){
    this.candidateModel.id=data.id;
    this.formval.controls['company'].setValue(data.company);
    this.formval.controls['name'].setValue(data.name);
    this.formval.controls['email'].setValue(data.email);
    this.formval.controls['user'].setValue(data.username);


  }

  Log(){
    this.http.get<any>("http://localhost:3000/bcv2?q="+this.username2).subscribe(res=>{
      this.Info=res;

  });
}
  Login(){
    this.http.get<any>("http://localhost:3000/bcv2").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.company===this.formval.value.company && a.username === this.formval.value.user
      });
      if(user){
        alert("verification sucess.please start onboarding");
        this.formval.reset();


      }else{
        alert("Not verified");
      }
    })
  }



  }


