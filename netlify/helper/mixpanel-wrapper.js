const util = require('util');
const mixpanel = require('mixpanel').init('62cdb58f3aa78610853e39b74ba7c8a2');
const trackAsync = util.promisify(mixpanel.track);

// We tried to wrap it with async/await to consist the
// codebase style and to avoid callback hell.
async function track(event, properties) {
    await trackAsync(event, properties)
}

export { track }