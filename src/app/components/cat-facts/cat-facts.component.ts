import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit, OnDestroy {
  data: any;
  loading: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getFact();
  }

  getFact(): void {
    this.loading = true;
    this.dataService.getData().pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.data = response;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

