import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  activeCount = 0;
  inactiveCount = 0;

 
  constructor(private userService: UserService, private countService: CounterService){}

  ngOnInit(){
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;

    this.activeCount = this.countService.countInActiveAction;
    this.inactiveCount = this.countService.countInActiveAction;
  
  }

}
