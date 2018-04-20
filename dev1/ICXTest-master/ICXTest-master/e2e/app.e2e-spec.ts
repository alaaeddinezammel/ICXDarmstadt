import { DeutshAppTestPage } from './app.po';

describe('deutsh-app-test App', () => {
  let page: DeutshAppTestPage;

  beforeEach(() => {
    page = new DeutshAppTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
