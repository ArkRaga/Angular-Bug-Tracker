import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BUGREPORT } from 'src/app/interfaces';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css'],
})
export class BugReportComponent implements OnInit {
  @Output() sendBugReport: EventEmitter<BUGREPORT> = new EventEmitter();
  catagories: Array<string> = ['Gameplay', 'Controls', 'Audio', 'Other'];
  name!: string;
  catagory!: string;
  description!: string;
  status!: string;
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.checkForm()) {
      return;
    }
    const newBug: BUGREPORT = {
      name: this.name,
      catagory: this.catagory,
      description: this.description,
      status: 'New',
      assignedWorker: 'None',
    };
    console.log('Bug: ', newBug);
    this.sendBugReport.emit(newBug);
    this.clearForm();
  }
  checkForm(): boolean {
    if (!this.name) {
      alert('Please Provide your name');
      return false;
    }
    if (!this.catagory) {
      alert('Please Pick a Catagory');
      return false;
    }
    if (!this.description) {
      alert('Please Provide a Description');
      return false;
    }
    return true;
  }
  clearForm(): void {
    this.name = '';
    this.description = '';
    this.catagory = '';
  }
}
