import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent implements OnInit, OnDestroy {
  data: any;
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getFact();
  }

  getFact(): void {
    this.dataService.getData().pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.data = response;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

