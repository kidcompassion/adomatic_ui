import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  currentUsername: string;
  currentJoinDate: string;

  constructor() {
    this.currentUser = {};
   }

  getCurrentUser(currentUsername){
    currentUsername = 'Bleepblop';
    return currentUsername;

  }

  getCurrentUserJoinDate(currentJoinDate){
    currentJoinDate = 'June 9, 2014';
    return currentJoinDate;

  }

}
