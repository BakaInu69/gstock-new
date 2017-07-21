import { GstockNewPage } from './app.po';

describe('gstock-new App', () => {
  let page: GstockNewPage;

  beforeEach(() => {
    page = new GstockNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
