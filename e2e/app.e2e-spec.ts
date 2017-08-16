import { Nasara2Page } from './app.po';

describe('nasara2 App', () => {
  let page: Nasara2Page;

  beforeEach(() => {
    page = new Nasara2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
