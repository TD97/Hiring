import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogComponent } from './log/log.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ApiService } from './api.service';
import { RecruitComponent } from './recruit/recruit.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EmplogComponent } from './emplog/emplog.component';
import { PostedComponent } from './posted/posted.component';
import { PostedlogComponent } from './postedlog/postedlog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LogComponent,
    CandidateComponent,
    RecruitComponent,
    LoginComponent,
    DashboardComponent,
    PostjobsComponent,
    EmpprofileComponent,
    EmplogComponent,
    PostedComponent,
    PostedlogComponent,
    ApplyComponent,
    JobdComponent,
    AppliedComponent,
    EditempComponent,
    SeekerComponent,
    InterviewComponent,
    DetailComponent,
    Interview1Component,
    RecprofileComponent,
    CalledComponent,
    EdrecComponent,
    FurtherComponent,
    PassedComponent,
    HiringComponent,
    RefcheckComponent,
    BcvComponent,
    HireComponent,
    Admin2Component,
    RegcComponent,
    RecregComponent,
    PartComponent,
    AboutComponent,
    JobsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
