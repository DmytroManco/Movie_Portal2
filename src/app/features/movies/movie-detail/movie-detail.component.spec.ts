import { MovieDetailComponent } from './movie-detail.component';

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
    routeSpy = jasmine.createSpy('paramMap');
    serviceSpy = {
      getMovie: jasmine.createSpy('getMovie').and.returnValue(observableMock),
      updateMovie: jasmine.createSpy('updateMovie').and.returnValue(observableMock)
    };

    sut = new MovieDetailComponent(serviceSpy, routeSpy);
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

    beforeEach(() => {
      changeRatePram = 5;
      sut.movie = movieMock;
      sut.changeRate(changeRatePram);
    });

    it('Should set right rating', () => {
      expect(sut.movie.stars).toBe(changeRatePram);
    });

    it('Should update movie rating', () => {
      expect(serviceSpy.updateMovie).toHaveBeenCalled();
    });
  });

  describe('#ngOnDestroy', () => {
    it('Should call unsubscribe', () => {
      sut.subscriptions = {
        unsubscribe: jasmine.createSpy('unsubscribe')
      };
      sut.ngOnDestroy();
      expect(sut.subscriptions.unsubscribe).toHaveBeenCalled();
    });
  });
});
