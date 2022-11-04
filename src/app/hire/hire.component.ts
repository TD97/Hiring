import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');
  profileinfo:any;


  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.Login();
  }
  Login(){
    this.http.get<any>("http://localhost:3000/onboard?q="+this.user).subscribe(res=>{
      this.profileinfo=res;
      console.log(res);
      }
      


      

      )
      
  }


}
