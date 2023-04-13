import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNgStyleComponent } from './ng-ng-style.component';

describe('NgNgStyleComponent', () => {
  let component: NgNgStyleComponent;
  let fixture: ComponentFixture<NgNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
