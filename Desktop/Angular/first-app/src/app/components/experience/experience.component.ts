import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/Services/utilities.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  constructor(private _msgService:UtilitiesService){} 
  Company="text"
  Year="text"
  ngOnInit(){
   this.Company = this._msgService.Company.name;
   this.Year = this._msgService.Company.year;
  }
  btnClick(){   //changes
    this._msgService.messageAlert();
  }
}
