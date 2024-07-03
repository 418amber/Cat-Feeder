import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    })
  }

  getString(): string {
    return JSON.stringify(this.data.data, null, 2);
  }

  getFact(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
