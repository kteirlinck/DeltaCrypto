import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsellorderComponent } from './specsellorder.component';

describe('SpecsellorderComponent', () => {
  let component: SpecsellorderComponent;
  let fixture: ComponentFixture<SpecsellorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecsellorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsellorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
