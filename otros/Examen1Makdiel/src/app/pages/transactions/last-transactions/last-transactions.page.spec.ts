import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastTransactionsPage } from './last-transactions.page';

describe('LastTransactionsPage', () => {
  let component: LastTransactionsPage;
  let fixture: ComponentFixture<LastTransactionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
