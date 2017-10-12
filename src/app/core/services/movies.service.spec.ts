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

  describe('#fetchData', () => {
    beforeEach(() => {
      httpMock.get.and.returnValue(mockMapResponse);
    });

    it('Do it sooooka', () => {
      sut.fetchData();
      expect(httpMock.get).toHaveBeenCalledWith(sut.url);
    });
  });
});
