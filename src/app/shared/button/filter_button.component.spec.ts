import { FilterButtonComponent } from './filter_button.component';

describe('FilterButtonComponent', ()=> {
  let sut: any;
  let onclickHandlerSpy: jasmine.Spy;

  beforeEach(() => {
    sut = new FilterButtonComponent();
    onclickHandlerSpy = spyOn(sut.onclickHandler, 'emit');
    sut.clickHandler();
  });

  it('Should called emit', () => {
    expect(onclickHandlerSpy).toHaveBeenCalled();
  });
});
