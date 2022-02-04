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
  allBugCards!: BUGREPORT[];
  assignedBugCards!: BUGREPORT[];

  constructor(
    private bugService: BugreportsService,
    private loginService: LoginService
  ) {
    bugService.getReports().subscribe((r) => {
      // console.log('Bingo', r);
      this.allBugCards = r.filter((c) => c.status === 'New');
      this.assignedBugCards = r.filter(
        (c) =>
          c.assignedWorker === loginService.currentUser.username &&
          c.status === 'in-progress'
      );
    });
  }

  ngOnInit(): void {
    console.log('DingDong');
  }
  userAcceptBugReport(report: BUGREPORT): void {
    report.assignedWorker = this.loginService.currentUser.username;
    this.bugService.updateReport(report).subscribe((r) => {
      this.assignedBugCards.push(r);
      this.allBugCards = this.allBugCards.filter((c) => c.status === 'New');
      // console.log('r: ', r);
    });
  }
  userFinalizeBugReport(report: BUGREPORT) {
    this.bugService.updateReport(report).subscribe((r) => {
      this.assignedBugCards = this.assignedBugCards.filter(
        (c) => c.status === 'in-progress'
      );
      // console.log('r: ', r);
    });
  }
}
