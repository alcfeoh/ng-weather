import { NgWeatherPage } from './app.po';
import {browser} from 'protractor';
import * as fs from 'fs';

import * as bh from 'blue-harvest';

describe('ng-weather App', () => {
  let page: NgWeatherPage;

  beforeEach(async() => {
    await browser.get('http://localhost:4200')
    let width = 1280;
    let height = 900;
    await browser.driver.manage().window().setSize(width, height);
  });

  it('should have the right rendering', async() => {
      let data = await browser.takeScreenshot();
      let result = await bh.compareScreenshot(data, './e2e/screenshot.png');
      expect(result).toBeTruthy();
  });

  let createScreenshot = async(): string => {
      let data = await browser.takeScreenshot();
      let path = fs.writeFileSync('./e2e/screenshot.png', data, 'base64');
      console.log('CREATED SCREENSHOT: ', path);
      return path;
  }
});
