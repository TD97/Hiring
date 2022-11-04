import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user:any=this.username.replaceAll('"','');
  candidateAll:any;
  candidateAll1:any;
  candidate:any;
  candidate1: any;



  constructor(private http:HttpClient,private api:ApiService,private router:Router) { }


  ngOnInit(): void {
    this.Login();
  }
  getApply(){
    this.http.get<any>("http://localhost:3000/appliedjobs").subscribe(res=>{
      this.candidateAll=res;
    })


  }
  adCandidates(data:any){
    this.api.adCandidate(data.username).subscribe(res=>{
      console.log(res);
      this.candidate=res;
      alert("Applied job");
    })
  }
  Login(){
    this.http.get<any>("http://localhost:3000/appliedjobs?q="+this.user).subscribe(res=>{
      this.candidate=res;
  })
}
  

  deleteApplied1(data:any){
    this.api.deleteApplied(data.id).subscribe(res=>{
      alert("records deleted");
      this.getApply();
    })
  }
  Logout(){
    this.router.navigate(['post1']);
  }

}
