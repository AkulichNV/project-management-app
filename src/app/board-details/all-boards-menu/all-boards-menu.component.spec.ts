import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoardsMenuComponent } from './all-boards-menu.component';

describe('AllBoardsMenuComponent', () => {
  let component: AllBoardsMenuComponent;
  let fixture: ComponentFixture<AllBoardsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBoardsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBoardsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
