import { MovieItemComponent } from './movie-item.component';

describe('MovieItemComponent', () => {
  let sut: any;

  let onGotoDetailSpy: jasmine.Spy;
  let onMovieSelectSpy: jasmine.Spy;
  let onLikeChangeSpy: jasmine.Spy;
  let changeRateSpy: jasmine.Spy;

  let gotoDetailParam: number;
  let changeLikeParam: boolean;
  let changeRateParam: number;

  beforeEach(() => {
    sut = new MovieItemComponent();
    onGotoDetailSpy = spyOn(sut.onGotoDetail, 'emit');
    onMovieSelectSpy = spyOn(sut.onMovieSelect, 'emit');
    onLikeChangeSpy = spyOn(sut.onLikeChange, 'emit');
    changeRateSpy = spyOn(sut.changeRate, 'emit');

    gotoDetailParam = 10;
    changeLikeParam = false;
    changeRateParam = 12;

    sut.gotoDetail(gotoDetailParam);
    sut.changeLikes(changeLikeParam);
    sut.onChangeRate(changeRateParam);
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
    expect(changeRateSpy).toHaveBeenCalledWith(changeRateParam);
    expect(onMovieSelectSpy).toHaveBeenCalled();
  });
});
