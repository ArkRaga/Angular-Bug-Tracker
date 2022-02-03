import { Component, OnInit } from '@angular/core';
import { BUGREPORT, USER } from 'src/app/interfaces';
import { BugreportsService } from 'src/app/services/bugreports.service';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css'],
})
export class WorkerPageComponent implements OnInit {
  isTriedLoggIn: boolean = false;
  bugCards!: BUGREPORT[];
  users!: USER[];
  currentUser!: USER;

  constructor(
    private bugService: BugreportsService,
    private loginService: LoginService
  ) {
    bugService.getReports().subscribe((r) => {
      this.bugCards = r;
    });
    this.currentUser = this.loginService.currentUser;
  }

  ngOnInit(): void {}
  userAcceptBugReport(report: BUGREPORT): void {
    report.assignedWorker = this.currentUser.username;
    this.bugService.updateReport(report).subscribe((r) => {
      // this.bugCards.push(r);
      console.log('r: ', r);
    });
  }
}
