import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogAccessoryComponent } from './catalog-accessory.component';

describe('CatalogAccessoryComponent', () => {
  let component: CatalogAccessoryComponent;
  let fixture: ComponentFixture<CatalogAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogAccessoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
