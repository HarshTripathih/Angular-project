import { Component, OnInit } from '@angular/core';
import { MbserviceService } from 'src/app/MobileService/mbservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userData:any=[];
    constructor(private _mbservice:MbserviceService){
      this._mbservice.getUserData().subscribe(data=>{
        this.userData = data
      });
      
   }
   ngOnInit(): void {
     
   }
}
