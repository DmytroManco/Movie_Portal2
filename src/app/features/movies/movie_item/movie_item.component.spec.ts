import { MovieItemComponent } from './movie_item.component';

describe('MovieItemComponent', () => {
  let sut: any;

  beforeEach(() => {
    sut = new MovieItemComponent();
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
});
