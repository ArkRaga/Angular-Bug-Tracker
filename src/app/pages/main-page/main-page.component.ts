import { Component, OnInit } from '@angular/core';
import { BUGREPORT } from 'src/app/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  submition: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  submitBugReport(bugreport: BUGREPORT): void {
    // @To-Do send to services aka api
    this.submition = true;
  }
}
