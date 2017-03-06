import { ProgvoterPage } from './app.po';

describe('progvoter App', () => {
  let page: ProgvoterPage;

  beforeEach(() => {
    page = new ProgvoterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
