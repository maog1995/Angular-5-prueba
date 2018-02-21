import { CrudBasicoPage } from './app.po';

describe('crud-basico App', function() {
  let page: CrudBasicoPage;

  beforeEach(() => {
    page = new CrudBasicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
