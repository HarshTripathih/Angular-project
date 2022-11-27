import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  messageAlert() {
    alert("Thanks for Subscribe. Will wil get in touch With You shortly");
  }
  Company = { name: "CodingExpo.pvt.ltd", year: "2021" }

}
