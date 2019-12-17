import { Component, OnChanges, OnInit, Input } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnChanges, OnInit {
@Input() public desc: string = 'EMPTY';
test: string = '123';
  constructor(private ds: DataService) { }

  ngOnChanges(): void {
    console.log(this.desc);
  }

  ngOnInit() {
    this.ds.getMessage().subscribe((msg: string) =>{
      this.test = msg;
    })
  }

}
