import { MovieDetailComponent } from './movie_detail.component';

describe('MovieDetailComponent', () => {
  let sut: any;
  let serviceSpy: any;
  let routeSpy: any;
  let movieMock: any;
  let observableMock: any;
  let observableSpy: any;
  let response: any;

  beforeEach(() => {
    movieMock = {
      id: 2,
      title: 'Once Upon a Time in the West',
      posterUrl: 'http://toSomePosterUrl',
      stars: 5,
      likes: 22,
      genres: ['drama', 'crime'],
      actors: ['Very', 'Famous,', 'Actors'],
      director: 'Sergio Leone',
      description: 'Cool Movie as usually'
    };

    observableMock = {
      do: jasmine.createSpy('do').and.callFake((callBack: any) => {
        callBack(response);
        return observableMock;
      }),
      subscribe: jasmine.createSpy('subscribe').and.callFake((callBack?: any) => {
        if (callBack) {
          callBack(response);
        }
        return observableMock;
      })
    };

    observableSpy = jasmine.createSpy('subscribe');
    response = Symbol('response');
    routeSpy = jasmine.createSpy('navigate');
    serviceSpy = {
      getMovie: jasmine.createSpy('getMovie').and.returnValue(observableMock),
      updateMovie: jasmine.createSpy('updateMovie').and.returnValue(observableMock)
    };

    sut = new MovieDetailComponent(serviceSpy, routeSpy);
    // sut.movie = movieMock;
  });

  it('Should match interface', () => {
    expect(sut.movie).not.toBeDefined();
    expect(sut.subscriptions).not.toBeDefined();
    expect(sut.changeRate).toBeDefined();
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
  });

  describe('#changeRate', () => {
    let changeRatePram: number;
    // let spy: any;
    beforeEach(() => {
      changeRatePram = 5;
      sut.movie = movieMock;
      spyOn(sut, 'changeRate');
      sut.changeRate(changeRatePram);
    });

    it('Should change rate and update to the server', () => {
      expect(sut.changeRate).toHaveBeenCalledWith(changeRatePram);
      expect(sut.service.updateMovie).toHaveBeenCalled();
    });
  });
});
