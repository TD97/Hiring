import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AdminModel } from './model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  students: any;
  candidateModel:AdminModel=new AdminModel();
  candidateAll: any;

  constructor(private api:ApiService,private http:HttpClient,private formBuilder:FormBuilder) { }
  formValue:FormGroup=this.formBuilder.group({
    firstName:[''],
    lastname:[''],
    email:[''],
    phone:['']
  })

  ngOnInit(): void {
    this.getAllCandidates();
  }
  postCandidateDetails(){
    this.candidateModel.firstName=this.formValue.value.firstName;
    this.candidateModel.lastname=this.formValue.value.lastname;
    this.candidateModel.email=this.formValue.value.email;
    this.candidateModel.phone=this.formValue.value.phone;
    this.api.postCandidate(this.candidateModel).subscribe(res=>{
      console.log(res);
      alert("Added successfully");
      this.formValue.reset();
    })



  }
  getAllCandidates(){
    this.api.getCandidate().subscribe(res=>{
      this.candidateAll=res;
    })
  }
deleteCandidates(data:any){
  this.api.deleteCandidate(data.id).subscribe(res=>{
    alert("records deleted");
    this.getAllCandidates();
  })
}
onEdit(data:any){
  this.candidateModel.id=data.id;
  this.formValue.controls['firstName'].setValue(data.firstName);
  this.formValue.controls['lastname'].setValue(data.lastname);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['phone'].setValue(data.phone);

}
updateCandidateDetails(){
  this.candidateModel.firstName=this.formValue.value.firstName;
  this.candidateModel.lastname=this.formValue.value.lastname;
  this.candidateModel.email=this.formValue.value.email;
  this.candidateModel.phone=this.formValue.value.phone;
  this.api.updateCandidate(this.candidateModel,this.candidateModel.id).subscribe(res=>{
    alert("record updated");
    this.formValue.reset();
    this.getAllCandidates();
  })



}

}
