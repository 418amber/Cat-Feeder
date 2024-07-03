import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDishComponent } from './cat-dish.component';

describe('CatDishComponent', () => {
  let component: CatDishComponent;
  let fixture: ComponentFixture<CatDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatDishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
