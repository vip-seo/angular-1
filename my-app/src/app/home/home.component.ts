import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, OnDestroy {
  public chapterDesc: string = 'Same description';
  
  constructor(
    private ds: DataService
    ) { 
    
  }

  ngOnChanges()  {
    console.log('ngOnChanges');
  }

  ngOnInit()  {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
public sendMessage() {
  this.ds.sendMessage('Hello!!!');
}

public getDesc(): string {
  return this.chapterDesc;
}
public showResult(value: number): void{
  alert(value);
}
}
