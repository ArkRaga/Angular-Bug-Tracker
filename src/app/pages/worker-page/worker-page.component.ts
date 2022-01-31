import { Component, OnInit } from '@angular/core';
import { USER } from 'src/app/interfaces';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css'],
})
export class WorkerPageComponent implements OnInit {
  isLoggedIn: boolean = false;
  isTriedLoggIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  login(user: USER): void {
    this.isTriedLoggIn = true;
  }
}
