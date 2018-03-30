import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationLinkComponent } from './administration-link.component';

describe('AdministrationLinkComponent', () => {
  let component: AdministrationLinkComponent;
  let fixture: ComponentFixture<AdministrationLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
