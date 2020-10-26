export function mockLocationHostName(hostname) {
    // Wild hax from github: https://github.com/facebook/jest/issues/890#issuecomment-456804379
    delete global.window.location;
    global.window = Object.create(window);
    global.window.location = {
        hostname: hostname
    };
}