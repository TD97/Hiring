import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  form:FormGroup=this.fb.group({
    company:[''],
    password:[''],
    email:[''],
    job:[''],
    exp:['']




  })

  ngOnInit(): void {
  }
  register()
  {
    this.http.post<any>("http://localhost:3000/comments",this.form.value).subscribe(res=>{alert('signup succeessful');this.form.reset();
    this.router.navigate(['log']);
}
  )
}


}
