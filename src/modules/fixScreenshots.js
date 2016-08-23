import debug from 'debug';

const log = debug('wdio-screenshot:fixScreenshots');

export default async function fixScreenshots(browser) {

  if (browser.isMobile && browser.isIOS) {
    // for the first time we need to set the orientation before taking screenshots
    // otherwise screens are sometimes incorrectly rotated and forcing the same orientation again seems to fix this issue
    const commandList = await browser.getCommandHistory();
    const alreadyRotated = commandList.some((({name, args}) => name === 'setOrientation' || name === 'orientation' && args.length > 0));

    if (!alreadyRotated) {
      const orientation = await browser.getOrientation();
      log('need to rotate it to fix screenshots orientation');
      await browser.orientation(orientation);
    } else {
      log('screenshots are already fixed by a rotation');
    }

  }
}
