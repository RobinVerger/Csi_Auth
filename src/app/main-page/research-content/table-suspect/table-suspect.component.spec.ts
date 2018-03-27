import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSuspectComponent } from './table-suspect.component';

describe('TableSuspectComponent', () => {
  let component: TableSuspectComponent;
  let fixture: ComponentFixture<TableSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
