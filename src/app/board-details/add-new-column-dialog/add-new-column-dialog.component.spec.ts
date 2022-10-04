import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewColumnDialogComponent } from './add-new-column-dialog.component';

describe('AddNewColumnDialogComponent', () => {
  let component: AddNewColumnDialogComponent;
  let fixture: ComponentFixture<AddNewColumnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewColumnDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewColumnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
