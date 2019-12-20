import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public myForm: FormGroup;
  public login: FormControl;
  public password: FormControl;
  

  constructor() { }

  ngOnInit() {
    this.login = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      login: this.login,
      password: this.password
    })
  }

  public send(): void {
       if (this.login.valid) {
         console.log(this.login.value);
       }
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
