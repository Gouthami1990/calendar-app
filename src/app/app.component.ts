import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calendar';
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  isavailable = false;   //variable is set to true

 
   clickFunction(event) { 
      //just added console.log which will display the event details in browser on click of the button.
      alert("Button is clicked");
      console.log(event);
   }
   changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
 }
 todaydate;
   constructor(private myservice: MyserviceService) {}
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
   }
}
