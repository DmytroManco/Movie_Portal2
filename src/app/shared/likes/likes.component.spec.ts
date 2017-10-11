import { LikesComponent } from './likes.component';

describe('Likes Component', () => {
  let sut: any;
  let changeLikeParam: boolean;
  let onChangeLikeSpy: jasmine.Spy;

  beforeEach(() => {
    sut = new LikesComponent();
    changeLikeParam = false;
    onChangeLikeSpy = spyOn(sut.onChangeLike, 'emit');

    sut.changeLike(changeLikeParam);
  });

  it('Should match interface', () => {
    expect(sut.onChangeLike).toBeDefined();
    expect(sut.changeLike).toBeDefined();
    expect(sut.likes).toEqual(0);
  });

  it('Should emit boolean', () => {
    expect(onChangeLikeSpy).toHaveBeenCalledWith(changeLikeParam);
  });
});
