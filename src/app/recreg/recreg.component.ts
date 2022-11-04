import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-recreg',
  templateUrl: './recreg.component.html',
  styleUrls: ['./recreg.component.css']
})
export class RecregComponent implements OnInit {
  profileinfo1: any;

  constructor(private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.Login();
  }
  Login(){
    this.http.get<any>("http://localhost:3000/comments").subscribe(res=>{
      this.profileinfo1=res;
      console.log(res);
  })
}
deleteCandidates(data:any){
  this.api.deleteApplied2(data.id).subscribe(res=>{
    alert("records deleted");
    this.Login();
  })
}



}
