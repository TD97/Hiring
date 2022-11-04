import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-further',
  templateUrl: './further.component.html',
  styleUrls: ['./further.component.css']
})
export class FurtherComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.substr(1,7);
  user2:any=this.username.replaceAll('"','');
  profileinfo: any;
  profileinfo1: any;


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.Login3();
    this.Login4();
  }
  Login3(){
    this.http.get<any>("http://localhost:3000/panel?q="+this.user2).subscribe(res=>{
      this.profileinfo=res;
      }
      


      

      )
      
  


  }
  Login4(){
    this.http.get<any>("http://localhost:3000/bcv?q="+this.user2).subscribe(res=>{
      this.profileinfo1=res;
      }
      


      

      )
      
  


  }






}
