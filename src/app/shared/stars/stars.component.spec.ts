import { StarsComponent } from './stars.component';

describe('StarsComponent', (): void => {
  let sut: any;
  let changeRateParam: any;
  let changeRateSpy: jasmine.Spy;

  beforeEach(() => {
    sut = new StarsComponent();
    changeRateParam = {rate: 2};
    changeRateSpy = spyOn(sut.changeRate, 'emit');

    sut.onChangeRate(changeRateParam);
  });

  it('Should match interface', () => {
   expect(sut.stars).toBeDefined();
   expect(sut.starsNumber).toEqual(5);
   expect(sut.className).toEqual('star');
   expect(sut.onChangeRate).toBeDefined();
   expect(sut.changeRate).toBeDefined();
  });

  it('Should emit rating', () => {
    expect(changeRateSpy).toHaveBeenCalledWith(changeRateParam.rate);
  });

  describe('#NgOnInit', () => {
    beforeEach(() => {
      sut.ngOnInit();
    });

    it('Should equal 5 the length of stars array', () => {
      expect(sut.stars.length).toBe(5);
    });
  });
});
