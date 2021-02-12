module.exports = {
    testRunner: "jest",
    runnerConfig:'e2e/config.json',
    behavior: {
      init: {
        reinstallApp: false,
        exposeGlobals: true
      },
      launchApp: "auto",
      cleanup: {
        shutdownDevice: false
      }
    },
    configurations: {
        "ios.sim": {
          type: "ios.simulator",
          binaryPath: "build/Build/Products/Debug-iphonesimulator/UITest.app",
          build: "xcodebuild -project UITest.xcodeproj -scheme UITest -configuration Debug -sdk iphonesimulator -derivedDataPath build",
          device: {
            type: "iPhone 11 Pro"
          }
        },
    },
    artifacts: {
      rootDir: ".artifacts",
      pathBuilder: "./e2e/detox.pathbuilder.js",
      plugins: {
        instruments: { "enabled": false },
        log: { "enabled": true },
        uiHierarchy: "enabled",
        screenshot: {
          shouldTakeAutomaticSnapshots: true,
          keepOnlyFailedTestsArtifacts: true,
          takeWhen: {
            "testStart": false,
            "testDone": true,
          },
        },
        video: {
          android: {
            bitRate: 4000000
          },
          simulator: {
            codec: "hevc"
          }
        }
      }
    },
  };