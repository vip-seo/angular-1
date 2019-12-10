import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public chapterDesc: string = 'Same description';
  constructor() { }

  ngOnInit() {
  }
public getDesc(): string {
  return this.chapterDesc;
}
public showResult(value: number): void{
  alert(value);
}
}
