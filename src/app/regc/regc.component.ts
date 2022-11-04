import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-regc',
  templateUrl: './regc.component.html',
  styleUrls: ['./regc.component.css']
})
export class RegcComponent implements OnInit {
  profileinfo1: any;

  constructor(private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.Login()
  }
  Login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      this.profileinfo1=res;
      console.log(res);
  })
}
deleteCandidates(data:any){
  this.api.deleteApplied1(data.id).subscribe(res=>{
    alert("records deleted");
    this.Login();
  })
}


}
