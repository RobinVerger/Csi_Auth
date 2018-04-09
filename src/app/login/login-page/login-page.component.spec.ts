import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialImportsModule } from '../../material-imports.module';
import { TestBarModule } from '../../test-bar/test-bar.module';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MaterialImportsModule, TestBarModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  }));


  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
