import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobd',
  templateUrl: './jobd.component.html',
  styleUrls: ['./jobd.component.css']
})
export class JobdComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');

  posted:any;
  nojobs:any;
  totaljobs:any;
  errormsg:any;
  successmsg:boolean=false;


  constructor(private http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.Login();

  }
  deleteApplied1(data:any){
    this.api.deleteCan(data.id).subscribe(res=>{
      alert("records deleted");
      
    })
  }

  Login(){
    this.http.get<any>("http://localhost:3000/jobpost?q="+this.username2).subscribe(res=>{
      this.posted=res;
      });
      


      
  
    }
    Logout(){
      this.router.navigate(['dash']);
    }

}