const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');

let url = "https://treehouse-projects.github.io/rsvp/selenium-webdriver-wait/";

suite(function(env) {
    describe('RSVP site', function() {
        let driver;

        before(async function() {
            driver = await env.builder().build();
        });

        it('loads existing invitations', async function() {
            // Set AJAX delay to 3s then uncomment to demonstrate
            // this.timeout(5000);
            await driver.get(url);
            let list = await driver.findElement(By.id('invitedList'));
            console.log(list.getTagName());
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
