import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplog',
  templateUrl: './emplog.component.html',
  styleUrls: ['./emplog.component.css']
})
export class EmplogComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  emplog:FormGroup=this.fb.group({
    username:[''],

    password:['']




  })


  ngOnInit(): void {
  }
  Login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username===this.emplog.value.username && a.password === this.emplog.value.password
      });
      if(user){
        alert("Login sucess");
        this.emplog.reset();
        this.router.navigate(['post1']);
        localStorage.setItem('current',JSON.stringify(user.username));


      }else{
        alert("not user");
      }
    })
  }
  Logout(){
    localStorage.removeItem('current');
    this.router.navigate(['header']);
    
  }


}
