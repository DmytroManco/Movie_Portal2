import { SearchComponent } from './search.component';

describe('Search Component', () => {
  let sut: any;
  let filter: string = 'boo';
  let spyOnSearch: jasmine.Spy;

  beforeEach(() => {
    sut = new SearchComponent();
    spyOnSearch = spyOn(sut.onSearch, 'emit');

    sut.search(filter);
  });

  it('Should match interface', () => {
    expect(sut.search).toBeDefined();
    expect(sut.onSearch).toBeDefined();
  });

  it('Should be emit string', () => {
    expect(spyOnSearch).toHaveBeenCalledWith(filter);
  });
});
