import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-posted',
  templateUrl: './posted.component.html',
  styleUrls: ['./posted.component.css']
})
export class PostedComponent implements OnInit {
  candidateAll: any;
  candidateAll1: any;

  constructor(private api:ApiService,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
    this.getAll1();

  }
  getAll(){
    this.api.getPost().subscribe(res=>{
      this.candidateAll=res;

    })
  }
  getAll1(){
    this.api.getPost1().subscribe(res=>{
      this.candidateAll1=res;

    })
  }


}
