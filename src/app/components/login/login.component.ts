import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { USER } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() sendLogin: EventEmitter<USER> = new EventEmitter();
  @Input() triedLogin!: boolean;
  username!: string;
  password!: string;

  constructor() {}

  ngOnInit(): void {}
  submitLogin(): void {
    if (!this.checkForm()) {
      return console.log('bro really ( - _ - ) ');
    }
    const newUser: USER = {
      username: this.username,
      password: this.password,
    };
    this.sendLogin.emit(newUser);
    this.resetForm();
  }
  checkForm(): boolean {
    if (!this.username) {
      alert('please input your username');
      return false;
    }
    if (!this.password) {
      alert('please input your password');
      return false;
    }
    return true;
  }
  resetForm(): void {
    this.username = '';
    this.password = '';
  }
}
