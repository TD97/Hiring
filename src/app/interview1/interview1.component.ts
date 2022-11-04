import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-interview1',
  templateUrl: './interview1.component.html',
  styleUrls: ['./interview1.component.css']
})
export class Interview1Component implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.substr(1,7);
  user2:any=this.username.replaceAll('"','');
  profileinfo: any;
  profileinfo1: any;
  profileinfo2: any;
  profileinfo3: any;


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.Login1();
    this.Login();
    this.Login2();
    this.Login3();
  }
  Login(){
    this.http.get<any>("http://localhost:3000/shorlist?q="+this.user2).subscribe(res=>{
      this.profileinfo=res;
      console.log(res);
      }
      


      

      )
      
  }
  Login1(){
    this.http.get<any>("http://localhost:3000/screening?q="+this.user2).subscribe(res=>{
      this.profileinfo1=res;
      console.log(res);
      }
      


      

      )
      
  


  }
  Login2(){
    this.http.get<any>("http://localhost:3000/job5?q="+this.user2).subscribe(res=>{
      this.profileinfo2=res;
      console.log(res);
      }
      


      

      )
      
  


  }
  Login3(){
    this.http.get<any>("http://localhost:3000/panel?q="+this.user2).subscribe(res=>{
      this.profileinfo3=res;
      }
      


      

      )
      
  


  }






}
