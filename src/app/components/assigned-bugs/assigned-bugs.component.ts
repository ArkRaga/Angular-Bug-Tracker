import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUGREPORT, USER } from 'src/app/interfaces';

@Component({
  selector: 'app-assigned-bugs',
  templateUrl: './assigned-bugs.component.html',
  styleUrls: ['./assigned-bugs.component.css'],
})
export class AssignedBugsComponent implements OnInit {
  @Input() bugReports!: BUGREPORT[];
  @Input() user!: USER;
  @Output() finialzeReport: EventEmitter<BUGREPORT> = new EventEmitter();
  reports!: BUGREPORT[];
  constructor() {}

  ngOnInit(): void {
    this.reports = this.bugReports.filter(
      (ele) =>
        ele.assignedWorker?.toLowerCase() === this.user.username.toLowerCase()
    );
  }
  finishReport(report: BUGREPORT): void {
    this.finialzeReport.emit(report);
    this.reports = this.reports.filter((ele) => ele.id !== report.id);
    console.log('Report: ', report);
  }
}
