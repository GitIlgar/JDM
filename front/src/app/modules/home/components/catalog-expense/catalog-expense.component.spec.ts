import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogExpenseComponent } from './catalog-expense.component';

describe('CatalogExpenseComponent', () => {
  let component: CatalogExpenseComponent;
  let fixture: ComponentFixture<CatalogExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
