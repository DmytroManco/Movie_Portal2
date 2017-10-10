import { SearchComponent } from './search.component';

describe('Search Component', () => {
  let sut: any;

  beforeEach(() => {
    sut = new SearchComponent();
  });

  it('Should match interface', () => {
    expect(sut.search).toBeDefined();
    expect(sut.onSearch).toBeDefined();
  });
});
