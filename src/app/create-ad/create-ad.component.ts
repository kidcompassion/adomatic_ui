import { Component, OnInit } from '@angular/core';
import { CreateAdServiceService } from './services/create-ad-service.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  advertisement : {};

  constructor(private createAdServiceService : CreateAdServiceService) { 
      this.advertisement = {};
  }    

  ngOnInit() {
       //this.createAdServiceService = this.createAdServiceService.get();
       this.createAdServiceService.saveAd();
  }

  onSubmit(mediaItem){
      this.advertisement = mediaItem;
      
      //upload images and save to laravel via service
      //save fields to laravel via service

    //  this.createAdService.saveAd(mediaItem);
      console.log(this.advertisement); //passes data to service for calculation

  }

  totalDuration() {
    //retrieves data from service

  }

  totalPrice() {
    //retrieves data from service
  }


}
