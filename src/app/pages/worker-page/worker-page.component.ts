import { Component, OnInit } from '@angular/core';
import { BUGREPORT, USER } from 'src/app/interfaces';
import { BugreportsService } from 'src/app/services/bugreports.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-worker-page',
  templateUrl: './worker-page.component.html',
  styleUrls: ['./worker-page.component.css'],
})
export class WorkerPageComponent implements OnInit {
  isLoggedIn: boolean = false; //should this be private?
  isTriedLoggIn: boolean = false;
  bugCards!: BUGREPORT[];
  users!: USER[];
  currentUser!: USER;

  constructor(
    private userService: UsersService,
    private bugService: BugreportsService
  ) {
    userService.getUsers().subscribe((u) => {
      this.users = u;
      console.log('USers: ', u);
    });
    bugService.getReports().subscribe((r) => {
      this.bugCards = r;
    });
  }

  ngOnInit(): void {}
  login(user: USER): void {
    const u: any = this.users.find(
      (ele) => ele.username.toLowerCase() === user.username.toLowerCase()
    );
    if (!u) {
      this.isTriedLoggIn = true;
      return;
    }
    if (u.password !== user.password) {
      this.isTriedLoggIn = true;
      return;
    }
    this.isLoggedIn = true;
    this.currentUser = u;
  }
  userAcceptBugReport(report: BUGREPORT): void {
    report.assignedWorker = this.currentUser.username;
    this.bugService.updateReport(report).subscribe((r) => {
      // this.bugCards.push(r);
      console.log('r: ', r);
    });
  }
}
