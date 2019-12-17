import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  inputs: ['name']
})
export class CounterComponent {
public name: string = 'default name';
@Input() public counterValue: number = 0;
@Input('step') public counterStep: number = 1;

@Output() public result: EventEmitter<number> = new EventEmitter()
  constructor() { }

 public increment(): void {
   this.counterValue = this.counterValue + this.counterStep;
 
  }

 public emit(): void {
this.result.emit(this.counterValue);
 }
}
