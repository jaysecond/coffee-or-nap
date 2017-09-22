import { CoffeeOrNapPage } from './app.po';

describe('coffee-or-nap App', () => {
  let page: CoffeeOrNapPage;

  beforeEach(() => {
    page = new CoffeeOrNapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
