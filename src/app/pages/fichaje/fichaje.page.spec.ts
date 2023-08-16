import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichajePage } from './fichaje.page';

describe('FichajePage', () => {
  let component: FichajePage;
  let fixture: ComponentFixture<FichajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
