import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactosComponent } from './formulario-contactos.component';

describe('FormularioContactosComponent', () => {
  let component: FormularioContactosComponent;
  let fixture: ComponentFixture<FormularioContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioContactosComponent]
    });
    fixture = TestBed.createComponent(FormularioContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
