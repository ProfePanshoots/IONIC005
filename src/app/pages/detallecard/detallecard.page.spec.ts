import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallecardPage } from './detallecard.page';

describe('DetallecardPage', () => {
  let component: DetallecardPage;
  let fixture: ComponentFixture<DetallecardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallecardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
