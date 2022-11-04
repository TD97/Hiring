import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postedlog',
  templateUrl: './postedlog.component.html',
  styleUrls: ['./postedlog.component.css']
})
export class PostedlogComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');
  candidateAll: any;
  searchText:any;
  get:any;
  clicked = false;

  constructor(private api:ApiService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getAllp();
  }
  getAllp(){
    this.api.getPost().subscribe(res=>{
      this.candidateAll=res;

    })
  }
  deCandidates(data:any){
    this.api.deCandidate(data.id).subscribe(res=>{
      this.get=res;
      console.log(res);
    })
  }
  
  actionMethod($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    this.router.navigate(['apply']);
}
  

  
  Logout(){
    localStorage.removeItem('current');
    this.router.navigate(['emplog']);
  }


}
