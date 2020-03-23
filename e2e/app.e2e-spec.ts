import { NgWeatherPage } from './app.po';
import {browser, By, element} from 'protractor';

describe('ng-weather App', () => {
  let page: NgWeatherPage = new NgWeatherPage();

      beforeEach(async() => {
        await page.navigateTo();
      });

    it('should have the right rendering', async() => {
        const text = await element(By.css('h2')).getText();
        expect(text).toBe('Enter a zipcode:');
        const button = await element(By.css('button')).getText();
        expect(button).toBe('Add location');
        const input = page.getAddLocationInput();
        expect(input).toBeTruthy();
    });

    it('should be possible to add a new location', async() => {
        page.getAddLocationInput().sendKeys('95742');
        page.getAddLocationButton().click();
        const text = await element(By.css('h3')).getText();
        expect(text).toContain('Rancho Cordova');
    });

    it('should be possible to see a 5-day forecast', async() => {
        await element(By.partialLinkText('Show 5-day forecast')).click();
        expect(await browser.getCurrentUrl()).toContain('/forecast/95742');
        const text = await element(By.css('h3')).getText();
        expect(text).toContain('5-day forecast for Rancho Cordova');
    });

    it('should be possible to remove a location', async() => {
        await element(By.className('close')).click();
        const locations = await element.all((By.css('h3')));
        expect(locations.length).toBe(0);
    });

    afterAll(() => {
        localStorage.clear();
    })

});
