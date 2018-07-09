import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  advertisement : {};


  constructor() { 
      this.advertisement = {};
  }    

  ngOnInit() {
      
      
      
  }

  onSubmit(mediaItem, advertisement, adTitle){
      this.advertisement = mediaItem;
      
      console.log(this.advertisement); //passes data to endpoint
     // console.log(adTitle);
      //calculateDuration()
      //calculatePrice()
  }

  calculateDuration() {

  }

  calculatePrice() {

  }


}
