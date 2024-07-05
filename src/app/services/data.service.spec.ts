import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpMock.verify();  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return JSON stringify when API returns data', () => {
    const response = {
      data: 'random cat fact',
    };

    service.getData().subscribe((result: any) => {
      expect(result.data).toBe('random cat fact');
    });

    const mockRequest = httpMock.expectOne('https://meowfacts.herokuapp.com/');
    mockRequest.flush(response);
  });

  it('should return an empty string when API returns nothing', () => {
    const response = { };

    service.getData().subscribe((result: any) => {
      expect(result.data).toBe('');
    });

    const mockRequest = httpMock.expectOne('https://meowfacts.herokuapp.com/');
    mockRequest.flush(response);
  });

  it("should throw error when API server returns error", () => {
    const mockError = new ProgressEvent('backend error');
    
    service.getData().subscribe((error: any) => {
      expect(error).toBeTruthy();
    });

    const mockRequest = httpMock.expectOne('https://meowfacts.herokuapp.com/');
    mockRequest.error(mockError);
  });
});
