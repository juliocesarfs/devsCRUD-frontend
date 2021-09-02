import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeveloperComponent } from './form-developer.component';

describe('FormDeveloperComponent', () => {
  let component: FormDeveloperComponent;
  let fixture: ComponentFixture<FormDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
