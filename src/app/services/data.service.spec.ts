import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { throwError } from 'rxjs';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpClientMock: jest.Mocked<HttpClient>;
 
  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<HttpClient>;
    service = new DataService(httpClientMock);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return JSON stringify when API returns data', () => {
    const response = {
      data: 'random cat fact',
    };
    httpClientMock.get.mockReturnValue(of(response));

    service.getFact().subscribe((data) => {
      expect(data).toBe(JSON.stringify(response));
    });    
  });

  it('should return empty string when API returns nothing', () => {
    const response = { };
    httpClientMock.get.mockReturnValue(of(response));

    service.getFact().subscribe((data) => {
      expect(data).toBe('');
    });    
  });
 
  it('should retrieve an error', () => {
    const error = 'Error';
    httpClientMock.get.mockReturnValue(throwError(() => error));
   
    service.getFact().subscribe({
      error: (err) => {
        expect(err).toBe(error);
      }
    });
  });
  
});