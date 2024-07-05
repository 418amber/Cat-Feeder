import { CatDishComponent } from './cat-dish.component';
import { FeederService } from '../../services/feeder.service';
import { BehaviorSubject } from 'rxjs';

describe('CatDishComponent', () => {
  let component: CatDishComponent;
  let feederServiceMock: jest.Mocked<FeederService>;
  let numFishSubject: BehaviorSubject<number>;

  beforeEach(async () => {

    numFishSubject = new BehaviorSubject<number>(0);

    feederServiceMock = {
      feedCat: jest.fn(),
      getFishCount: jest
        .fn()
        .mockReturnValue(numFishSubject.asObservable()),
    } as unknown as jest.Mocked<FeederService>;

    component = new CatDishComponent(feederServiceMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize numFish to 0', () => {
    expect(component['numFish']).toEqual(0);
  })

  it('should subscribe to getFishCount and receive values in ngOnInit', () => {
    component.ngOnInit();
    numFishSubject.next(1);
    expect(feederServiceMock.getFishCount).toHaveBeenCalled();
    expect(component.getNumFish()).toEqual(1); 
  });

  it('should unsubscribe on destroy', () => {
    const destroySpy = jest.spyOn(component['destroy$'], 'next');
    const completeSpy = jest.spyOn(component['destroy$'], 'complete');

    component.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});
