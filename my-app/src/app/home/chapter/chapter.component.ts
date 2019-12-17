import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnChanges, OnInit {
@Input() public desc: string = 'EMPTY';
test: string = '123';
  constructor() { }

  ngOnChanges(): void {
    console.log(this.desc);
  }

  ngOnInit() {
  }

}
