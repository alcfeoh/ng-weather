import {browser, element, by, By, ElementFinder} from 'protractor';

export class NgWeatherPage {
  async navigateTo() {
    return await browser.get('http://localhost:4200');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAddLocationButton(): ElementFinder {
    return element(By.partialButtonText('Add location'));
  }

  getAddLocationInput(): ElementFinder {
    return element(By.css('input'));
  }
}
