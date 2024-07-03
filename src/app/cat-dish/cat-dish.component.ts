import { Component } from '@angular/core';
import { FeederService } from '../feeder.service';

@Component({
  selector: 'app-cat-dish',
  templateUrl: './cat-dish.component.html',
  styleUrls: ['./cat-dish.component.css']
})
export class CatDishComponent {
  numFish: number = 0;
  fishCount: any;

  constructor(private feederService: FeederService) { }

  ngOnInit(): void {
    this.feederService.fishCount$.subscribe(count => {
      this.numFish = count;
    });
  }
}
