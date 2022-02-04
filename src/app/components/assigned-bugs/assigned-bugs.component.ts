import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUGREPORT, USER } from 'src/app/interfaces';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-assigned-bugs',
  templateUrl: './assigned-bugs.component.html',
  styleUrls: ['./assigned-bugs.component.css'],
})
export class AssignedBugsComponent implements OnInit {
  @Input() bugReports!: BUGREPORT[];
  @Output() finialzeReport: EventEmitter<BUGREPORT> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  finishReport(report: BUGREPORT): void {
    this.finialzeReport.emit(report);
  }
}
