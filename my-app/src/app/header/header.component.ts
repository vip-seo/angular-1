import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public companyName: string = 'Mega application';

  constructor() { }

  ngOnInit() {
  }
  public increment(){
    this.companyName = this.companyName + ' ' + this.companyName;
  }

}
