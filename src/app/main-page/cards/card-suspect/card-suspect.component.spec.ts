import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuspectComponent } from './card-suspect.component';

describe('CardSuspectComponent', () => {
  let component: CardSuspectComponent;
  let fixture: ComponentFixture<CardSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
