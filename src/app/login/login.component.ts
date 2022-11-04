import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  formy:FormGroup=this.fb.group({
  company:[''],

    password:['']




  })


  ngOnInit(): void {
  }
  Login(){
    this.http.get<any>("http://localhost:3000/comments").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.company===this.formy.value.company && a.password === this.formy.value.password
      });
      if(user){
        alert("Login sucess");
        this.formy.reset();
        this.router.navigate(['dash']);
        localStorage.setItem('currentemployee',JSON.stringify(user.company));


      }else{
        alert("not user");
      }
    })
  }


}
