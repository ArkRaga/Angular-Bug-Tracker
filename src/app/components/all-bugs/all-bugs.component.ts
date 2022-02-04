import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUGREPORT } from 'src/app/interfaces';

@Component({
  selector: 'app-all-bugs',
  templateUrl: './all-bugs.component.html',
  styleUrls: ['./all-bugs.component.css'],
})
export class AllBugsComponent implements OnInit {
  @Input() bugReports!: BUGREPORT[];
  @Output() acceptBugReport: EventEmitter<BUGREPORT> = new EventEmitter();

  reports!: BUGREPORT[];
  constructor() {}

  ngOnInit(): void {}
  userAcceptBugReport(report: BUGREPORT) {
    this.acceptBugReport.emit(report);
  }
}
