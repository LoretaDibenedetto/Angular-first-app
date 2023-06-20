import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoLibroComponent } from './inserimento-libro.component';

describe('InserimentoLibroComponent', () => {
  let component: InserimentoLibroComponent;
  let fixture: ComponentFixture<InserimentoLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserimentoLibroComponent]
    });
    fixture = TestBed.createComponent(InserimentoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
