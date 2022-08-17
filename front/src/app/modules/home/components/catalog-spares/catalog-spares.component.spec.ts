import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSparesComponent } from './catalog-spares.component';

describe('CatalogSparesComponent', () => {
  let component: CatalogSparesComponent;
  let fixture: ComponentFixture<CatalogSparesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSparesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
