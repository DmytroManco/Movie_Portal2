import { MovieItemComponent } from './movie_item.component';

describe('MovieItemComponent', () => {
  let sut: any;

  let onGotoDetailSpy: jasmine.Spy;
  let onMovieSelectSpy: jasmine.Spy;
  let onLikeChangeSpy: jasmine.Spy;
  let onChangeRateSpy: jasmine.Spy;

  let gotoDetailParam: number;
  let changeLikeParam: boolean;
  let changeRateParam: number;

  beforeEach(() => {
    sut = new MovieItemComponent();
    onGotoDetailSpy = spyOn(sut.onGotoDetail, 'emit');

    gotoDetailParam = 10;

    sut.gotoDetail(gotoDetailParam);
  });

  it('Should match interface', () => {
    expect(sut.movie).toBeUndefined();
    expect(sut.onMovieSelect).toBeDefined();
    expect(sut.onLikeChange).toBeDefined();
    expect(sut.onGotoDetail).toBeDefined();
    expect(sut.onChangeRate).toBeDefined();
    expect(sut.gotoDetail).toBeDefined();
    expect(sut.changeLikes).toBeDefined();
    expect(sut.changeRate).toBeDefined();
  });

  it('Should emit movie id', () => {
    expect(onGotoDetailSpy).toHaveBeenCalledWith(gotoDetailParam);
  });
});
