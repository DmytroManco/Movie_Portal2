import { SearchComponent } from './search.component';

describe('Search Component', () => {
  let sut: any;

  beforeEach(() => {
    sut = new SearchComponent();
    spyOn(sut, 'search');
    sut.search();
  });

  it('Should match interface', () => {
    expect(sut.search).toBeDefined();
    expect(sut.onSearch).toBeDefined();
  });

  it('Should be called search function', () => {
    expect(sut.search).toHaveBeenCalled();
  });
});
