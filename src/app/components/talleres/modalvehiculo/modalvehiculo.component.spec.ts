import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvehiculoComponent } from './modalvehiculo.component';

describe('ModalvehiculoComponent', () => {
  let component: ModalvehiculoComponent;
  let fixture: ComponentFixture<ModalvehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalvehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
