import { Component, OnChanges, OnDestroy, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {DataService} from "../data.service";
import {ChapterComponent} from "./chapter/chapter.component";
import {CounterComponent} from './counter/counter.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, OnDestroy {
  public chapterDesc: string = 'Same description';
  
  @ViewChild(ChapterComponent, {static: true}) public chapter: ChapterComponent;
  
  @ViewChildren(CounterComponent) public counterList: QueryList<CounterComponent>;
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
  test() {
    this.counterList.forEach(
      counter => {
        counter.increment();
      }
    )
  }
  
  ngAfterViewInit() {
    console.log(this.chapter.desc);
    this.counterList.forEach(counter => {
      setTimeout(() => {
      counter.increment();
      }, 0)
    })
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
