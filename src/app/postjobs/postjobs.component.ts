import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrls: ['./postjobs.component.css']
})
export class PostjobsComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  username1:any=localStorage.getItem('currentemployee');
  username2:any=this.username1.replaceAll('"','');
  postjob:FormGroup=this.fb.group({
    company: ['',Validators.required],
    salary:['',Validators.required],
    location:['',Validators.required],

    jobRole: ['',Validators.required],
    email: ['',Validators.required],

    expRequired: ['',Validators.required],
    skills: ['',Validators.required],
    educationalQualifications: ['',Validators.required],
    jobDescription: ['',Validators.required],
    jobType: ['',Validators.required]







  })


  ngOnInit(): void {
  }
  jobpost()
  {
    this.http.post<any>("http://localhost:3000/jobpost",this.postjob.value).subscribe(res=>{alert('job posted succeessful');this.postjob.reset();
}
  )
}


}
