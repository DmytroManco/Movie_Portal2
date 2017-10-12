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

    routeSpy = jasmine.createSpy('navigate');
    serviceSpy = {
      getMovie: jasmine.createSpy('getMovie').and.returnValue(1),
      updateMovie: jasmine.createSpy('updateMovie').and.returnValue(2)
    };
    sut = new MovieDetailComponent(serviceSpy, routeSpy);
  });

  it('Should match interface', () => {
    expect('boo').toBe('boo');
  });
});
