import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampeonPage } from './campeon.page';

describe('CampeonPage', () => {
  let component: CampeonPage;
  let fixture: ComponentFixture<CampeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
