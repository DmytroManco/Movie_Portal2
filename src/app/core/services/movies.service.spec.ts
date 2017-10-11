import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let sut: any;
  let httpMock: any;
  let mockServerResponse: any;
  let mockMapResponse: any;
  let mockResponse: any;
  let routerMock: any;

  const urlMock = 'very important url';

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('httpMock', ['get', 'put']);
    mockServerResponse = jasmine.createSpyObj('mockServerResponse', ['json']);
    mockMapResponse = jasmine.createSpyObj('mockMapResponse', ['map']);

    mockMapResponse.map.and.returnValue(mockResponse);
    sut = new MoviesService(httpMock, routerMock);
  });
});
