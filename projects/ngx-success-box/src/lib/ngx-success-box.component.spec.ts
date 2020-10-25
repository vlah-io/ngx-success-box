import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSuccessBoxComponent } from './ngx-success-box.component';

describe('NgxSuccessBoxComponent', () => {
  let component: NgxSuccessBoxComponent;
  let fixture: ComponentFixture<NgxSuccessBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSuccessBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSuccessBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
