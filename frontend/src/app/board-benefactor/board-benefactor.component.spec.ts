import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBenefactorComponent } from './board-benefactor.component';

describe('BoardBenefactorComponent', () => {
  let component: BoardBenefactorComponent;
  let fixture: ComponentFixture<BoardBenefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBenefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBenefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
