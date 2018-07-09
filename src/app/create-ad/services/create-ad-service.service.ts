import { Injectable } from '@angular/core';

@Injectable()
export class CreateAdServiceService {
advertisement: {};
  constructor() { 
     
  }

  getAd(){
      console.log('get');
  }

  saveAd(){
      console.log('saved');
      //makes post request to laravel end point
  }

  deleteAd(){
      console.log('deleted');
  }

  updateAd(){
      console.log('updates');
  }


  getAdvertiserAds(){
    // TODO: retrieve all the current user's ads
  }

  saveAdvertiserAds(){
      
  }

  deleteAdvertiserAds(){

  }

  updateAdvertiserAds(){

  }



  // @TODO: Built out admin functionality
  getAds(){

  }

  saveAds(){

  }

  deletedAds(){

  }

  updateAds(){

  }




  calculateAdDuration(){
      // number of days

  }

  calculateAdPrice(){
      // day to price
  }

}
