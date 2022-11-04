import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  posted:any =[];

  totaljobs:any;

  constructor(private http:HttpClient,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit() {
  }
  Jobed(){
    {
      this.router.navigate(['jobed']);
    }
  
  }
  Seeker(){
    this.router.navigate(['seeker']);
  }
  Called(){
    this.router.navigate(['call']);
  }
  
  Logout(){
    localStorage.removeItem('currentEmployee');
    this.router.navigate(['log']);
  }
}


