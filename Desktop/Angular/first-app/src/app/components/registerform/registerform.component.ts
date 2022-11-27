import { Component } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
  topics = ['Angular','React','View'];

  userModel = new User('harsh','harsh@test.com',5555556651,'','morning',true);
}
