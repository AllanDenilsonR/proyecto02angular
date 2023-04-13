import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBinDingComponent } from './ng-bin-ding.component';

describe('NgBinDingComponent', () => {
  let component: NgBinDingComponent;
  let fixture: ComponentFixture<NgBinDingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBinDingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgBinDingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
