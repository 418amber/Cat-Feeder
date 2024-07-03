import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService, private router: Router) {}

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

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToFacts(): void {
    this.router.navigate(['/facts']);
  }
}

