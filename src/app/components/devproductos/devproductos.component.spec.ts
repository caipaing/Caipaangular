import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevproductosComponent } from './devproductos.component';

describe('DevproductosComponent', () => {
  let component: DevproductosComponent;
  let fixture: ComponentFixture<DevproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
