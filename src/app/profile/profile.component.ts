import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : {};

  constructor(private profileService : ProfileService) {
      this.currentUser = {};
   }

  ngOnInit() {
    this.currentUser.name = this.profileService.getCurrentUser();
    this.currentUser.joinDate = this.profileService.getCurrentUserJoinDate();
  }

}
