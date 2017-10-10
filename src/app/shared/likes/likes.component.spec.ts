import { LikesComponent } from './likes.component';

describe('Likes Component', () => {
  let sut: any;

  beforeEach(() => {
    sut = new LikesComponent();
  });

  it('Should match interface', () => {
    expect(sut.onChangeLike).toBeDefined();
    expect(sut.changeLike).toBeDefined();
    expect(sut.likes).toEqual(0);
  });
});
