import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit, OnDestroy {
  imageUrls: string[] = [];
  private destroy$ = new Subject<void>();

  private page = 1;
  private readonly limit = 10;

  throttle = 0;
  distance = 2;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.loadInitialImages();
  }

  loadInitialImages(): void {
    this.dataService.getImages(this.limit).pipe(takeUntil(this.destroy$)).subscribe(images => {
      this.imageUrls = images;
    });
  }

  loadMoreImages(): void {
    this.dataService.getImages(this.limit).pipe(takeUntil(this.destroy$)).subscribe(images => {
      this.imageUrls = this.imageUrls.concat(images);
    });
  }

  onScroll(): void {
    this.page++;
    this.loadMoreImages();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
