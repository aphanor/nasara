import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultesComponent } from './adultes.component';

describe('AdultesComponent', () => {
  let component: AdultesComponent;
  let fixture: ComponentFixture<AdultesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
