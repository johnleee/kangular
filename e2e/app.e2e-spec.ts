import { KangularPage } from './app.po';

describe('kangular App', () => {
  let page: KangularPage;

  beforeEach(() => {
    page = new KangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
