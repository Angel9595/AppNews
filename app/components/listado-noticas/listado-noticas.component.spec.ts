import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticasComponent } from './listado-noticas.component';

describe('ListadoNoticasComponent', () => {
  let component: ListadoNoticasComponent;
  let fixture: ComponentFixture<ListadoNoticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNoticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
