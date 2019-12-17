import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, OnDestroy {
  public chapterDesc: string = 'Same description';
  constructor() { 
    console.log('constructor');
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
public getDesc(): string {
  return this.chapterDesc;
}
public showResult(value: number): void{
  alert(value);
}
}
