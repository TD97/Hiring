import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  hero: any;
  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');


  constructor(private route:ActivatedRoute,private http:HttpClient,private api:ApiService,private router:Router,private fb:FormBuilder) { }
  application:FormGroup=this.fb.group({
    "name":[''],
    "email":[''],
    "company":[''],
    "role":[''],
    "username":[''],
    "skills":[''],
    "cv":['']
  })
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.api.getHero(id).subscribe(res=>{
      this.hero=res;
    })
      
  
  }
  sendApp()
  {
    this.http.post<any>("http://localhost:3000/appliedjobs",this.application.value).subscribe(res=>{alert('Application received');this.application.reset();
    this.router.navigate(['post1']);

  }
    )
    
  

}
Login(){
  this.http.get<any>("http://localhost:3000/appliedjobs").subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.username===this.application.value.username && a.role===this.application.value.role&& a.company===this.application.value.company
    });
    if(user){
      alert("Already applied");
      this.application.reset();
      this.router.navigate(['post1']);


    }else{
      this.http.post<any>("http://localhost:3000/appliedjobs",this.application.value).subscribe(res=>{alert('Application received');this.application.reset();
      this.router.navigate(['post1']);
  
    }
      )
  
    }
  })
}



}
