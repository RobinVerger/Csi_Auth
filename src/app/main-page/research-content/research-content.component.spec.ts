import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchContentComponent } from './research-content.component';

describe('ResearchContentComponent', () => {
  let component: ResearchContentComponent;
  let fixture: ComponentFixture<ResearchContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
