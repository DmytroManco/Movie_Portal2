import { LikesComponent } from './likes.component';

describe('Likes Component', () => {
  let sut: any;

  beforeEach(() => {
    sut = new LikesComponent();
    spyOn(sut, 'changeLike');
    sut.changeLike();
  });

  it('Should match interface', () => {
    expect(sut.onChangeLike).toBeDefined();
    expect(sut.changeLike).toBeDefined();
    expect(sut.likes).toEqual(0);
  });

  it('Should call changeLike function', () => {
    expect(sut.changeLike).toHaveBeenCalled();
  });
});
