import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContactosComponent } from './listar-contactos.component';

describe('ListarContactosComponent', () => {
  let component: ListarContactosComponent;
  let fixture: ComponentFixture<ListarContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarContactosComponent]
    });
    fixture = TestBed.createComponent(ListarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
