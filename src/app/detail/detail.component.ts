import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  hero: any;
  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');

  constructor(private route:ActivatedRoute,private http:HttpClient,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getHero();

  }
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.api.getHero(id).subscribe(res=>{
      this.hero=res;
    })
      
  
  }


}
