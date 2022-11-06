import { Component, OnInit } from '@angular/core';
import userData from '../../../assets/json/user.json';

interface User{
  firstName : String,
  lastName : String,
  emailId : String ,
  password : String
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  users:User[]=userData;

  ngOnInit(): void {

  }

  

}
