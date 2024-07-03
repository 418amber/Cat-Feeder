import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeederService } from '../../services/feeder.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cat-dish',
  templateUrl: './cat-dish.component.html',
  styleUrls: ['./cat-dish.component.css']
})
export class CatDishComponent implements OnInit, OnDestroy {
  private numFish: number = 0;
  private destroy$ = new Subject<void>();

  constructor(private feederService: FeederService) { }

  ngOnInit(): void {
    this.feederService.getFishCount().pipe(takeUntil(this.destroy$)).subscribe((count: number) => {
      this.numFish = count;
    });
  }

  getNumFish(): number {
    return this.numFish;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
