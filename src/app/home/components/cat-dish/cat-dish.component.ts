import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeederService } from '../../../services/feeder.service';
import { PetService } from '../../../services/pet.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cat-dish',
  templateUrl: './cat-dish.component.html',
  styleUrls: ['./cat-dish.component.css']
})
export class CatDishComponent implements OnInit, OnDestroy {
  private numFish: number = 0;
  private numPets: number = 0;
  private destroy$ = new Subject<void>();
  showBadge = true;

  constructor(private feederService: FeederService, private petService: PetService) { }

  ngOnInit(): void {
    this.feederService.getFishCount().pipe(takeUntil(this.destroy$)).subscribe((count: number) => {
      this.numFish = count;
    });
    this.petService.getPetCount().pipe(takeUntil(this.destroy$)).subscribe((count: number) => {
      this.numPets = count;
    });
  }

  feedCat(): void {
    this.feederService.feedCat();
    this.showBadge = false;
  }

  getNumFish(): number {
    return this.numFish;
  }

  petCat(): void {
    this.petService.petCat();
  }

  getNumPets(): number {
    return this.numPets;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
