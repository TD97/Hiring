import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-refcheck',
  templateUrl: './refcheck.component.html',
  styleUrls: ['./refcheck.component.css']
})
export class RefcheckComponent implements OnInit {

  username:any=localStorage.getItem('current');
  user=this.username.replaceAll('"','');
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  application:FormGroup=this.fb.group({
    "name":[''],
    "email":[''],
    "company":[''],
    "username":[''],
    "grad":[''],
    "cv":[''],
    "cv1":['']
  })
  


  ngOnInit(): void {
  }
  sendApp()
  {
    this.http.post<any>("http://localhost:3000/bcv2",this.application.value).subscribe(res=>{alert('Form received');this.application.reset();
    this.router.navigate(['post1']);

  }
    )
    
  

}


}
