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
    onMovieSelectSpy = spyOn(sut.onMovieSelect, 'emit');
    onLikeChangeSpy = spyOn(sut.onLikeChange, 'emit');
    onChangeRateSpy = spyOn(sut.onChangeRate, 'emit');

    gotoDetailParam = 10;
    changeLikeParam = false;
    changeRateParam = 12;

    sut.gotoDetail(gotoDetailParam);
    sut.changeLikes(changeLikeParam);
    sut.changeRate(changeRateParam);
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

  it('Should emit movieId', () => {
    expect(onGotoDetailSpy).toHaveBeenCalledWith(gotoDetailParam);
  });

  it('Should emit likes and selectedMovie', () => {
    expect(onLikeChangeSpy).toHaveBeenCalledWith(changeLikeParam);
    expect(onMovieSelectSpy).toHaveBeenCalled();
  });

  it('Should emit rate and selectedMovie', () => {
    expect(onChangeRateSpy).toHaveBeenCalledWith(changeRateParam);
    expect(onMovieSelectSpy).toHaveBeenCalled();
  });
});
