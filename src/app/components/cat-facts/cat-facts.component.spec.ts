import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { CatFactsComponent } from './cat-facts.component';

describe('CatFactsComponent', () => {
  let component: CatFactsComponent;
  let dataServiceMock: jest.Mocked<DataService>;

  beforeEach(() => {

    dataServiceMock = {
      getData: jest.fn(),
    } as unknown as jest.Mocked<DataService>;

    component = new CatFactsComponent(dataServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables', () => {
    expect(component.data).toBeUndefined();
    expect(component.loading).toBeFalsy();
  });

  it('should update variables after getting API response', () => {
    dataServiceMock.getData.mockReturnValue(of('response'));
    component.getFact();

    expect(component.data).toEqual('response');
    expect(component.loading).toBeFalsy();
  });

  it('should unsubscribe on destroy', () => {
    const destroySpy = jest.spyOn(component['destroy$'], 'next');
    const completeSpy = jest.spyOn(component['destroy$'], 'complete');

    component.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});
