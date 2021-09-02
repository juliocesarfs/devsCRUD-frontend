import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeveloperComponent } from './details-developer.component';

describe('DetailsDeveloperComponent', () => {
  let component: DetailsDeveloperComponent;
  let fixture: ComponentFixture<DetailsDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
