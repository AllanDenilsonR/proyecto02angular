import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNgClassComponent } from './ng-ng-class.component';

describe('NgNgClassComponent', () => {
  let component: NgNgClassComponent;
  let fixture: ComponentFixture<NgNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNgClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
