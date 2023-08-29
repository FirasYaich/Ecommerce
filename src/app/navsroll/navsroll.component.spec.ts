import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsrollComponent } from './navsroll.component';

describe('NavsrollComponent', () => {
  let component: NavsrollComponent;
  let fixture: ComponentFixture<NavsrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavsrollComponent]
    });
    fixture = TestBed.createComponent(NavsrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
