describe("Example of SwiftUI test failure", () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      launchArgs: { 'DTXEnableVerboseSyncSystem': 'YES', 'DTXEnableVerboseSyncResources': 'YES' }
    });
  });
  
  it("should have info text", async () => {
    await expect(
      element(by.label("info text").and(by.traits(["staticText"])))
    ).toBeVisible();
  });

  it("should have tap info button", async () => {
    await expect(
      element(by.label("info.circle").and(by.traits(["button"])))
    ).toBeVisible();
  }); 
  
  it("should able to tap on info button", async () => {
    await element(by.label("info.circle").and(by.traits(["button"]))).tap();
    // await expect(
    //   element(by.label("Dismiss").and(by.traits(["button"])))
    // ).toBeVisible();
  });

});
