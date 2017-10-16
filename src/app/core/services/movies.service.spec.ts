import { MoviesService } from './movies.service';
import { Observable } from 'rxjs/Observable';

describe('MoviesService', () => {
  let sut: any;
  let httpMock: any;
  let mockServerResponse: any;
  let mockMapResponse: any;
  let mockRouter: any;
  let movieMock: any;
  let mockCatchResponse: any;
  let movieIdMock: any;

  const urlMock = 'very important url';
  const mockResponse = Observable.of('test');

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

    movieIdMock = 2456565;
    httpMock = jasmine.createSpyObj('httpMock', ['get', 'put']);
    mockServerResponse = jasmine.createSpyObj('mockServerResponse', ['json']);
    mockMapResponse = jasmine.createSpyObj('mockMapResponse', ['map']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    mockMapResponse.map.and.returnValue(mockResponse);

    sut = new MoviesService(httpMock, mockRouter);
    sut.url = urlMock;
  });

  it('Should match interface', () => {
    expect(sut.url).toBeDefined();
    expect(sut.getMovie).toBeDefined();
    expect(sut.fetchData).toBeDefined();
    expect(sut.updateMovie).toBeDefined();
    expect(sut.filterMovie).toBeDefined();
    expect(sut.sortMovies).toBeDefined();
    expect(sut.getMovie).toBeDefined();
    expect(sut.returnError).toBeDefined();
    expect(sut.returnData).toBeDefined();
  });

  describe('#fetchData', () => {
    beforeEach(() => {
      httpMock.get.and.returnValue(mockMapResponse);
    });

    it('Should call http.get function', () => {
      sut.fetchData();
      expect(httpMock.get).toHaveBeenCalledWith(sut.url);
    });
  });

  describe('#updateMovie', () => {
    beforeEach(() => {
      httpMock.put.and.returnValue(mockMapResponse);
    });

    it('Should call updateMovie', () => {
      sut.movie = movieMock;
      sut.updateMovie(movieMock);
      expect(httpMock.put).toHaveBeenCalled();
    });
  });

  describe('#filterMovie', () => {
    beforeEach(() => {
      httpMock.get.and.returnValue(mockMapResponse);
    });

    it('Should call http.get function', () => {
      sut.filterMovie();
      expect(httpMock.get).toHaveBeenCalled();
    });
  });

  describe('#sortMovies', () => {
    beforeEach(() => {
      httpMock.get.and.returnValue(mockMapResponse);
    });

    it('Should call http.get function', () => {
      sut.sortMovies();
      expect(httpMock.get).toHaveBeenCalled();
    });
  });

  describe('#getMovie', () => {
    beforeEach(() => {
      httpMock.get.and.returnValue(mockMapResponse);
    });

    it('Should call http.get function', () => {
      sut.getMovie();
      expect(httpMock.get).toHaveBeenCalled();
    });
  });

  describe('#returnData', () => {
    it('Should return response in json format', () => {
      expect(sut.returnData(mockServerResponse)).toEqual(mockServerResponse.json());
    });
  });

  describe('#returnError', () => {
    let response: any;
    beforeEach(() => {
      response = Symbol('a');
      mockServerResponse.json.and.returnValue(response);
    });

    it('Should return Observable error', () => {
      expect(sut.returnError(mockServerResponse)).
      toEqual(Observable.throw(mockServerResponse.json().error || 'Server error'));
    });
  });
});
