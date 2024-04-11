import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MitiendaPage } from './mitienda.page';

describe('MitiendaPage', () => {
  let component: MitiendaPage;
  let fixture: ComponentFixture<MitiendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MitiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
