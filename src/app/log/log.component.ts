import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
IsAuthenticationFailed:boolean;
loginForm=new FormGroup({
  UserName:new FormControl('',[Validators.required,Validators.minLength(6)]),
  Password:new FormControl('',[Validators.required,Validators.minLength(6)]),

});
  constructor(private router:Router) { 
    this.IsAuthenticationFailed=false;

  }

  ngOnInit(): void {
  }
  login(){
    if(
      this.loginForm.controls.UserName.value=='Admin1'&& this.loginForm.controls.Password.value=="Admin1"
    ){
      this.router.navigate(['admin2']);
    }else{
      this.IsAuthenticationFailed=true;
    }
  }

}
