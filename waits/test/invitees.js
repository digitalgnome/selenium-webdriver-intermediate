const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const RsvpPage = require('../pages/rsvp.js');

suite(function(env) {
    describe('RSVP site', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new RsvpPage(driver);
            await page.open();
        });

        it('loads existing invitations', async function() {
            // Set AJAX delay to 3s then uncomment to demonstrate
            // this.timeout(5000);
            let list = await driver.findElement(page.locators.invitedList);
            await driver.wait(
                until.elementLocated(By.css('#invitedList li'))
            );
            let text = await list.getText();
            assert(text.includes("Craig Dennis"));
        });

        after(async function() {
            driver.quit();
        });
    });
});
