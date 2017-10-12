import { StarsComponent } from './stars.component';

describe('StarsComponent', (): void => {
  let sut: any;
  let changeRateParam: any;
  let onChangeRateSpy: jasmine.Spy;

  beforeEach(() => {
    sut = new StarsComponent();
    changeRateParam = {rate: 2};
    onChangeRateSpy = spyOn(sut.onChangeRate, 'emit');

    sut.changeRate(changeRateParam);
  });

  it('Should match interface', () => {
   expect(sut.stars).toBeDefined();
   expect(sut.starsNumber).toEqual(5);
   expect(sut.className).toEqual('star');
   expect(sut.onChangeRate).toBeDefined();
   expect(sut.changeRate).toBeDefined();
  });

  it('Should emit rating', () => {
    expect(onChangeRateSpy).toHaveBeenCalledWith(changeRateParam.rate);
  });

  describe('#NgOnInit', () => {
    beforeEach(() => {
      sut.ngOnInit();
    });

    it('Should equal to 5 length of stars arr', () => {
      expect(sut.stars.length).toBe(5);
    });
  });
});
