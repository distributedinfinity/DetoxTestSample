module.exports = {
    testRunner: "jest",
    runnerConfig:'e2e/config.json',
    configurations: {
        "ios.sim": {
          type: "ios.simulator",
          binaryPath: "build/Build/Products/Debug-iphonesimulator/UITest.app",
          build: "xcodebuild -project UITest.xcodeproj -scheme UITest -configuration Debug -sdk iphonesimulator -derivedDataPath build",
          device: {
            type: "iPhone 11 Pro"
          }
        },
    }
  };