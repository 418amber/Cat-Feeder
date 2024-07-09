import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit, OnDestroy {
  imageURL: any;
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(): void {
    this.dataService.getImage().pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.imageURL = response;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
