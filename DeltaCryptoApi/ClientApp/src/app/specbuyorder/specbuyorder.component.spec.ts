import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecbuyorderComponent } from './specbuyorder.component';

describe('SpecbuyorderComponent', () => {
  let component: SpecbuyorderComponent;
  let fixture: ComponentFixture<SpecbuyorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecbuyorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecbuyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
