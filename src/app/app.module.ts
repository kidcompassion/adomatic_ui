import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdTableComponent } from './ad-table/ad-table.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewAdComponent } from './view-ad/view-ad.component';
import { CreateAdServiceService } from './create-ad/services/create-ad-service.service';
import { ProfileService } from './profile/services/profile.service';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-ad', component: CreateAdComponent },
  { path: 'my-ads', component: AdTableComponent },
  { path: 'my-profile', component: ProfileComponent },
  { path: 'view-ad/:id', component: ViewAdComponent, pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdTableComponent,
    CreateAdComponent,
    ProfileComponent,
    ViewAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    DlDateTimePickerDateModule
  ],
  providers: [
    FormsModule,
    CreateAdServiceService,
    ProfileService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
