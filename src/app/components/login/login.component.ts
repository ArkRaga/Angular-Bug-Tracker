import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/interfaces';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  submitLogin(): void {
    if (!this.checkForm()) {
      return console.log('bro really ( - _ - ) ');
    }
    const newUser: USER = {
      username: this.username,
      password: this.password,
    };
    console.log('trying to login: ', this.loginService.login(newUser));
    this.loginService.login(newUser).subscribe((v) => {
      if (v) {
        this.router.navigate(['/worker']);
        this.triedLogin = false;
      } else {
        this.triedLogin = true;
      }
    });
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
