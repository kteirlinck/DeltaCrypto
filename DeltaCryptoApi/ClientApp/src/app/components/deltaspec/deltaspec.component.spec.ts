import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaspecComponent } from './deltaspec.component';

describe('DeltaspecComponent', () => {
  let component: DeltaspecComponent;
  let fixture: ComponentFixture<DeltaspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltaspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
