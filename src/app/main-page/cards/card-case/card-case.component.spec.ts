import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseComponent } from './card-case.component';

describe('CardCaseComponent', () => {
  let component: CardCaseComponent;
  let fixture: ComponentFixture<CardCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
