import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LogComponent } from './log/log.component';
import { CandidateComponent } from './candidate/candidate.component';
import { RecruitComponent } from './recruit/recruit.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmplogComponent } from './emplog/emplog.component';
import { PostedComponent } from './posted/posted.component';
import { PostedlogComponent } from './postedlog/postedlog.component';
import { ApplyComponent } from './apply/apply.component';
import { JobdComponent } from './jobd/jobd.component';
import { AppliedComponent } from './applied/applied.component';
import { EditempComponent } from './editemp/editemp.component';
import { SeekerComponent } from './seeker/seeker.component';
import { InterviewComponent } from './interview/interview.component';
import { DetailComponent } from './detail/detail.component';
import { Interview1Component } from './interview1/interview1.component';
import { RecprofileComponent } from './recprofile/recprofile.component';
import { CalledComponent } from './called/called.component';
import { EdrecComponent } from './edrec/edrec.component';
import { FurtherComponent } from './further/further.component';
import { PassedComponent } from './passed/passed.component';
import { HiringComponent } from './hiring/hiring.component';
import { RefcheckComponent } from './refcheck/refcheck.component';
import { BcvComponent } from './bcv/bcv.component';
import { HireComponent } from './hire/hire.component';
import { Admin2Component } from './admin2/admin2.component';
import { RegcComponent } from './regc/regc.component';
import { RecregComponent } from './recreg/recreg.component';
import { PartComponent } from './part/part.component';
import { AboutComponent } from './about/about.component';
import { JobsappComponent } from './jobsapp/jobsapp.component';

const routes: Routes = [
  {path:"", redirectTo:"header", pathMatch:"full"},
  {path:"header", component:HeaderComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LogComponent},
  {path:"candidate",component:CandidateComponent},
  {path:"recruit",component:RecruitComponent},
  {path:"log",component:LoginComponent},
  {path:"dash",component:DashboardComponent},
  {path:"post",component:PostjobsComponent},
  {path:"emp",component:EmpprofileComponent},
  {path:"emplog",component:EmplogComponent},
  {path:"postj",component:PostedComponent},
  {path:"post1",component:PostedlogComponent},
  {path:"apply",component:ApplyComponent},
  {path:"jobed",component:JobdComponent},
  {path:"applied",component:AppliedComponent},
  {path:"edit",component:EditempComponent},
  {path:"seeker",component:SeekerComponent},
  {path:"interview",component:InterviewComponent},
  { path: 'detail/:id', component: DetailComponent },
  {path:"int",component:Interview1Component},
  {path:"rec",component:RecprofileComponent},
  {path:"call",component:CalledComponent},
  {path:"edrec",component:EdrecComponent},
  {path:"fur",component:FurtherComponent},
  {path:"pass",component:PassedComponent},
  {path:"hiri",component:HiringComponent},
  {path:"ref",component:RefcheckComponent},
  {path:"bcv",component:BcvComponent},
  {path:"hire",component:HireComponent},
  {path:"admin2",component:Admin2Component},
  {path:"reg",component:RegcComponent},
  {path:"reg1",component:RecregComponent},
  {path:'part/:id',component:PartComponent},
  {path:"about",component:AboutComponent},
  {path:"jobs",component:JobsappComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
