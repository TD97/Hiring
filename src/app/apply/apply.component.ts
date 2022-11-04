import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');



  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
application:FormGroup=this.fb.group({
  "name":[''],
  "email":[''],
  "company":[''],
  "username":[''],
  "skills":[''],
  "cv":['']
})
  ngOnInit(): void {
  }
  sendApp()
  {
    this.http.post<any>("http://localhost:3000/appliedjobs",this.application.value).subscribe(res=>{alert('Application received');this.application.reset();
    this.router.navigate(['post1']);

  }
    )
    
  

}
Login(){
  this.http.post<any>("http://localhost:3000/appliedjobs",this.application.value).subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email===this.application.value.email 
    });
    if(user){
      alert("Already Applied");
      this.application.reset();
      this.router.navigate(['dash']);


    }else{
      alert("Please Apply");
    }
  })
}
Logout(){
  localStorage.removeItem('current');
  this.router.navigate(['post1']);
}

}



