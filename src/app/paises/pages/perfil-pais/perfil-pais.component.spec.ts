import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPaisComponent } from './perfil-pais.component';

describe('PerfilPaisComponent', () => {
  let component: PerfilPaisComponent;
  let fixture: ComponentFixture<PerfilPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
