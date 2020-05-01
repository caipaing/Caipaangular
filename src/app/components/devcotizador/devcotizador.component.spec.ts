import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcotizadorComponent } from './devcotizador.component';

describe('DevcotizadorComponent', () => {
  let component: DevcotizadorComponent;
  let fixture: ComponentFixture<DevcotizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevcotizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcotizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
