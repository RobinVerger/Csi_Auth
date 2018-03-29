import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationSuspectComponent } from './administration-suspect.component';

describe('AdministrationSuspectComponent', () => {
  let component: AdministrationSuspectComponent;
  let fixture: ComponentFixture<AdministrationSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
