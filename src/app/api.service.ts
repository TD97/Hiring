import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private heroesurl='http://localhost:3000/jobpost';

  username:any=localStorage.getItem('current');

  token:any;
  constructor(private http:HttpClient) { }

  postCandidate(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{return res;}))
  }

getCandidate(){
  return this.http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=>{return res;}))

}
updateCandidate(data:any,id:number){
  return this.http.put<any>('http://localhost:3000/posts/'+id,data).pipe(map((res:any)=>{return res;}))

}
updateEmp(data:any,id:number){
  return this.http.put<any>('http://localhost:3000/signup/'+id,data).pipe(map((res:any)=>{return res;}))

}
updateRec(data:any,id:number){
  return this.http.put<any>('http://localhost:3000/comments/'+id,data).pipe(map((res:any)=>{return res;}))

}


deleteCandidate(id:number){
  return this.http.delete<any>('http://localhost:3000/posts/'+id).pipe(map((res:any)=>{return res;}))
}
deleteCan(id:number){
  return this.http.delete<any>('http://localhost:3000/jobpost/'+id).pipe(map((res:any)=>{return res;}))
}
deleteCan1(id:number){
  return this.http.delete<any>('http://localhost:3000/appliedjobs/'+id).pipe(map((res:any)=>{return res;}))
}


adCandidate(username:number){
  return this.http.get<any>('http://localhost:3000/appliedjobs/'+username).pipe(map((res:any)=>{return res;}))
}
deCandidate(id:number){
  return this.http.get<any>('http://localhost:3000/jobpost/'+id).pipe(map((res:any)=>{return res;}))
}
getHero(id: number) {
  const url = `${this.heroesurl}/${id}`;
  return this.http.get<any>(url).pipe((map((res:any)=>{return res;}))
  );
}



getPost(){
  return this.http.get<any>('http://localhost:3000/jobpost').pipe(map((res:any)=>{return res;}))
}
getPost1(){
  return this.http.get<any>('http://localhost:3000/jobpost?q=MBA').pipe(map((res:any)=>{return res;}))
}

deleteApplied(id:number){
  return this.http.delete<any>('http://localhost:3000/appliedjobs/'+id).pipe(map((res:any)=>{return res;}))

}
deleteApplied1(id:number){
  return this.http.delete<any>('http://localhost:3000/signup/'+id).pipe(map((res:any)=>{return res;}))

}
deleteApplied2(id:number){
  return this.http.delete<any>('http://localhost:3000/comments/'+id).pipe(map((res:any)=>{return res;}))

}
deleteApplied3(id:number){
  return this.http.delete<any>('http://localhost:3000/panel/'+id).pipe(map((res:any)=>{return res;}))

}



postCandidate1(data:any){
  return this.http.post<any>('http://localhost:3000/shorlist',data).pipe(map((res:any)=>{return res;}))
}
postCandidate2(data:any){
  return this.http.post<any>('http://localhost:3000/job5',data).pipe(map((res:any)=>{return res;}))
}
postCandidate3(data:any){
  return this.http.post<any>('http://localhost:3000/screening',data).pipe(map((res:any)=>{return res;}))
}
postCandidate4(data:any){
  return this.http.post<any>('http://localhost:3000/panel',data).pipe(map((res:any)=>{return res;}))
}
postCandidate5(data:any){
  return this.http.post<any>('http://localhost:3000/bcv',data).pipe(map((res:any)=>{return res;}))
}








}
