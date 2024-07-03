import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFeederComponent } from './cat-feeder.component';

describe('CatFeederComponent', () => {
  let component: CatFeederComponent;
  let fixture: ComponentFixture<CatFeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatFeederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
