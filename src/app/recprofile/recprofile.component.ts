import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recprofile',
  templateUrl: './recprofile.component.html',
  styleUrls: ['./recprofile.component.css']
})
export class RecprofileComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  profileinfo: any;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.Login();
  }
  Login(){
    this.http.get<any>("http://localhost:3000/comments?q="+this.username2).subscribe(res=>{
      this.profileinfo=res;
      
      }
      


      

      )
      
  }


}
