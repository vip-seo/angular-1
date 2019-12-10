import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
@Input() public desc: string = 'EMPTY';

  constructor() { }

  ngOnInit() {
  }

}
