import { Component } from '@angular/core';
import { FeederService } from '../feeder.service';

@Component({
  selector: 'app-cat-feeder',
  templateUrl: './cat-feeder.component.html',
  styleUrls: ['./cat-feeder.component.css']
})
export class CatFeederComponent {
  constructor(private feederService: FeederService) { }

  feedCat(): void {
    this.feederService.feedCat();
  }
}
