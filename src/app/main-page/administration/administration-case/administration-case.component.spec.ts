import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCaseComponent } from './administration-case.component';

describe('AdministrationCaseComponent', () => {
  let component: AdministrationCaseComponent;
  let fixture: ComponentFixture<AdministrationCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
