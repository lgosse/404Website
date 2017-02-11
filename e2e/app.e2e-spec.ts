import { BDE404WebsitePage } from './app.po';

describe('bde404-website App', function() {
  let page: BDE404WebsitePage;

  beforeEach(() => {
    page = new BDE404WebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
