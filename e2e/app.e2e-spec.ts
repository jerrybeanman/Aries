import { AriesPage } from './app.po';

describe('aries App', function() {
  let page: AriesPage;

  beforeEach(() => {
    page = new AriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
