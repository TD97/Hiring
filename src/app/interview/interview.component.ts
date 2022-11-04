import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.substr(1,7);
  user2:any=this.username.replaceAll('"','');
  profileinfo: any;



  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.Login();
  }
  Login(){
    this.http.get<any>("http://localhost:3000/job3?q="+this.user2).subscribe(res=>{
      this.profileinfo=res;
      console.log(res);
      }
      


      

      )
      
  }


}
