import { browser, element, by } from 'protractor';

export class NgWeatherPage {
  async navigateTo() {
    return await browser.get('http://localhost:4200');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
