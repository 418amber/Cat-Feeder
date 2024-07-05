import { Component } from '@angular/core';
import { FeederService } from '../../services/feeder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-feeder',
  templateUrl: './cat-feeder.component.html',
  styleUrls: ['./cat-feeder.component.css']
})
export class CatFeederComponent {
  constructor(private feederService: FeederService) { }

  

}
