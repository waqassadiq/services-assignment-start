import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements OnInit{

  countActiveAction: number = 0;
  countInActiveAction: number = 0;

  constructor() { }

  ngOnInit(){}

  setCountActiveAction(){
    this.countActiveAction++;
    console.log("countActiveAction: " + this.countActiveAction);
  }

  setCountInactiveAction(){
    this.countInActiveAction++;
    console.log("countInActiveAction: " + this.countInActiveAction);
  }

}
