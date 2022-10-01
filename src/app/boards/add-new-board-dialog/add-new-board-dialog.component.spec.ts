import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBoardDialogComponent } from './add-new-board-dialog.component';

describe('AddNewBoardDialogComponent', () => {
  let component: AddNewBoardDialogComponent;
  let fixture: ComponentFixture<AddNewBoardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBoardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
