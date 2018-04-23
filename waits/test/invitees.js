const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');

var url = "https://treehouse-projects.github.io/rsvp/selenium-webdriver-wait/";
// var url = "http://localhost:8000/";

suite(function(env) {
    describe('RSVP site', function() {
        var driver;

        before(async function() {
            driver = await env.builder().build();
        });

        it('loads existing invitations', async function() {
            // Set AJAX delay to 3s then uncomment to demonstrate
            // this.timeout(5000);
            await driver.get(url);
            var list = await driver.findElement(By.id('invitedList'));
            console.log(list.getTagName());
            await driver.wait(
                until.elementLocated(By.css('#invitedList li'))
            );
            var text = await list.getText();
            assert(text.includes("Craig Dennis"));
        });

        after(async function() {
            driver.quit();
        });
    });
});
