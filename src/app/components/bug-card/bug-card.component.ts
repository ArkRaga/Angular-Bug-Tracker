import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BUGREPORT } from 'src/app/interfaces';

@Component({
  selector: 'app-bug-card',
  templateUrl: './bug-card.component.html',
  styleUrls: ['./bug-card.component.css'],
})
export class BugCardComponent implements OnInit {
  @Input() isEditable!: boolean;
  @Input() report!: BUGREPORT;
  @Input() class!: string;
  @Output() acceptBugReport: EventEmitter<BUGREPORT> = new EventEmitter();
  @Output() finializeReport: EventEmitter<BUGREPORT> = new EventEmitter();
  statuses: Array<string> = ['Solved', 'Unresolveable'];
  status!: string;

  constructor() {}

  ngOnInit(): void {}
  acceptReport(): void {
    // console.log('click');
    this.report.status = 'in-progress';
    this.acceptBugReport.emit(this.report);
  }
  finishReport(): void {
    this.report.status = this.status;
    this.finializeReport.emit(this.report);
  }
}
