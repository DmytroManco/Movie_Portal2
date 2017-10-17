import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let sut: any;
  let serviceSpy: any;
  let movieMock: any;
  let routerSpy: any;
  let observableSpy: any;
  let observableMock: any;
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
    routerSpy = jasmine.createSpy('navigate');
    serviceSpy = {
      getMovie: jasmine.createSpy('getMovie').and.returnValue(observableMock),
      fetchData: jasmine.createSpy('fetchData').and.returnValue(observableMock),
      sortMovies: jasmine.createSpy('sortMovies').and.returnValue(observableMock),
      filterMovie: jasmine.createSpy('filterMovie').and.returnValue(observableMock),
      updateMovie: jasmine.createSpy('updateMovie').and.returnValue(observableMock)
    };

    sut = new MoviesComponent(serviceSpy, routerSpy);
  });

  it('Should match interface', () => {
    expect(sut.movies).not.toBeDefined();
    expect(sut.selectedMovie).not.toBeDefined();
    expect(sut.likes).not.toBeDefined();
    expect(sut.subscriptions).not.toBeDefined();
    expect(sut.ngOnInit).toBeDefined();
    expect(sut.ngOnDestroy).toBeDefined();
    expect(sut.movieSelect).toBeDefined();
    expect(sut.sortMovies).toBeDefined();
    expect(sut.searchMovie).toBeDefined();
    expect(sut.onChangeRate).toBeDefined();
    expect(sut.gotoDetail).toBeDefined();
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      response = [movieMock];
      sut.ngOnInit();
    });

    it('Should define subscriptions', () => {
      expect(sut.subscriptions).toBeDefined();
    });

    it('Should call service.fetchData function', () => {
      expect(sut.service.fetchData).toHaveBeenCalled();
    });

    it('Should get movies', () => {
      expect(sut.movies).toEqual(response);
    });

    it('Should set selected movie to first el of movies array', () => {
      expect(sut.selectedMovie).toEqual(response[0]);
    });
  });
  describe('#gotoDetail', () => {
    let routerNavigateParam: any;
    let movieId: number;

    beforeEach(() => {
      sut.router = jasmine.createSpyObj('router', ['navigate']);
      movieId = 3;
      routerNavigateParam = ['/movie/' + movieId];
      sut.gotoDetail(movieId);
    });

    it('Should call router.navigate with params', () => {
      expect(sut.router.navigate).toHaveBeenCalledWith(routerNavigateParam);
    });
  });

  describe('#slectMovie', () => {
    beforeEach(() => {
      sut.movieSelect(movieMock);
    });

    it('Should select movie', () => {
      expect(sut.selectedMovie).toEqual(movieMock);
    });
  });

  describe('#changeLikes', () => {
    let totalLikes: number;
    beforeEach(() => {
      sut.selectedMovie = movieMock;
      totalLikes = movieMock.likes;
    });

    it('Should increment likes if true', () => {
      sut.changeLikes(true);
      expect(sut.selectedMovie.likes).toBe(totalLikes + 1);
    });

    it('Should decrement likes if false', () => {
      sut.changeLikes(false);
      expect(sut.selectedMovie.likes).toBe(totalLikes - 1);
    });

    it('Should be called service.updateMovie with selected movie param', () => {
      sut.changeLikes(false);
      expect(sut.service.updateMovie).toHaveBeenCalledWith(sut.selectedMovie);
    });
  });

  describe('#changeRate', () => {
    let rating: number;
    beforeEach(() => {
      sut.selectedMovie = movieMock;
      rating = 2;
      sut.onChangeRate(rating);
    });

    it('Should call service.updateMovie with selected movie param', () => {
      expect(sut.service.updateMovie).toHaveBeenCalledWith(sut.selectedMovie);
    });

    it('Should call service.updateMovie with selected movie param', () => {
      expect(sut.selectedMovie.stars).toBe(rating);
    });
  });

  describe('#sortMovies', () => {
    let sortMovieParam: string;
    beforeEach(() => {
      sortMovieParam = 'string';
      response = [movieMock];
      sut.sortMovies(sortMovieParam);
    });

    it('Should call service.sortMovies with params', () => {
      expect(sut.service.sortMovies).toHaveBeenCalledWith(sortMovieParam);
    });

    it('Should sort movie list', () => {
      expect(sut.movies).toEqual(response);
    });
  });

  describe('#searchMovie', () => {
    let searchMovieParam: string;
    beforeEach(() => {
      searchMovieParam = 'string';
      response = [movieMock];
      sut.searchMovie(searchMovieParam);
    });

    it('Should call service.sortMovies', () => {
      expect(sut.service.filterMovie).toHaveBeenCalledWith(searchMovieParam);
    });

    it('Should filter movie list', () => {
      expect(sut.movies).toEqual(response);
    });
  });

  describe('#ngOnDestroy', () => {
    it('Should call unsubscribe', () => {
      sut.subscriptions = {
        unsubscribe: jasmine.createSpy('unsubscribe')
      };
      sut.ngOnDestroy();
    });
  });
});
