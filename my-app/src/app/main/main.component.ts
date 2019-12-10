import { Component, OnInit } from '@angular/core';
import { User } from "../user.model";
import { DataService } from "../data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

public currentUser: User = null;


public list: User[] = [];


  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      (users: User[]) => {
        this.list = users;
      }
    );
  }


  public showUserDetail(user: User): void {
    this.currentUser = user;
  }

}
