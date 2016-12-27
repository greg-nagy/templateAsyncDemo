import { TemplateDemoPage } from './app.po';

describe('template-demo App', function() {
  let page: TemplateDemoPage;

  beforeEach(() => {
    page = new TemplateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
