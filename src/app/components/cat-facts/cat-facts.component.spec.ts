import { DataService } from '../../services/data.service';
import { CatFactsComponent } from './cat-facts.component';

describe('CatFactsComponent', () => {
  let component: CatFactsComponent;
  let dataServiceMock: jest.Mocked<DataService>;

  beforeEach(async () => {

    dataServiceMock = {
      getData: jest.fn(),
    } as unknown as jest.Mocked<DataService>;

    component = new CatFactsComponent(dataServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on destroy', () => {
    const destroySpy = jest.spyOn(component['destroy$'], 'next');
    const completeSpy = jest.spyOn(component['destroy$'], 'complete');

    component.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});
