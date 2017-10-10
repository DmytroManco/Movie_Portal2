import { StarsComponent } from './stars.component';

describe('StarsComponent', (): void => {
  let sut: any;
  let serviceSpy: any;

  beforeEach(() => {
    sut = new StarsComponent();
    spyOn(sut, 'changeRate');
    sut.changeRate();
  });

  it('Should match interface', () => {
   expect(sut.stars).toBeDefined();
   expect(sut.starsNumber).toEqual(5);
   expect(sut.className).toEqual('star');
   expect(sut.onChangeRate).toBeDefined();
   expect(sut.changeRate).toBeDefined();
  });

  it('Should call changeRate function', () => {
    expect(sut.changeRate).toHaveBeenCalled();
  });
});
