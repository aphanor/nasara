import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgComponent } from './prog.component';

describe('ProgComponent', () => {
  let component: ProgComponent;
  let fixture: ComponentFixture<ProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
