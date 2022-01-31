import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedBugsComponent } from './assigned-bugs.component';

describe('AssignedBugsComponent', () => {
  let component: AssignedBugsComponent;
  let fixture: ComponentFixture<AssignedBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
