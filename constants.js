// Strips out whitespace before a line, I think
export const regStrip = /^[\r\t\f\v ]+|[\r\t\f\v ]+$/gm;

// The default values for each setting
export const tcDefaults = {
    speed: 1.0, // default speed to play videos
    displayKey: "v", // is this used?
    rememberSpeed: false,
    audioBoolean: false,
    startHidden: false,
    forceLastSavedSpeed: false,
    enabled: true,
    controllerOpacity: 0.3,
    keyBindings: [
      { action: "display", key: "v", value: 0, force: false, predefined: true },
      { action: "slower", key: "s", value: 0.1, force: false, predefined: true },
      { action: "faster", key: "d", value: 0.1, force: false, predefined: true },
      { action: "rewind", key: "z", value: 10, force: false, predefined: true },
      { action: "advance", key: "x", value: 10, force: false, predefined: true },
      { action: "reset", key: "r", value: 1, force: false, predefined: true },
      { action: "fast", key: "g", value: 1.8, force: false, predefined: true }
    ],
    blacklist: `www.instagram.com
  twitter.com
  imgur.com
  teams.microsoft.com
  `
  };