import debug from "debug";

import scrollbars from "../scripts/scrollbars";
import modifyElements from "../scripts/modifyElements";
import hideElements from "../scripts/hideElements";

const log = debug('wdio-screenshot:afterScreenshot');

export default async function afterScreenshot(browser, options) {
    // show elements
    if (Array.isArray(options.hide) && options.hide.length) {
        log('show the following elements again: %s', options.hide.join(', '));


        for (let i = 0; i < options.hide.length; i++) {
            let elements = await browser.$$(options.hide[i]);
            await browser.execute(hideElements, elements, false);
        }
    }

    // add elements again
    if (Array.isArray(options.remove) && options.remove.length) {
        log('add the following elements again: %s', options.remove.join(', '));
        await browser.selectorExecute(options.remove, modifyElements, 'display', '');
    }

    // show scrollbars
    log('show scrollbars again');
    await browser.execute(scrollbars, true);
}
