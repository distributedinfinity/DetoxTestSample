describe("Example of SwiftUI test failure", () => {

  beforeEach(async () => {
    await device.relaunchApp();
  });
  
  it("should have info text", async () => {
    await expect(
      element(by.label("info text").and(by.traits(["staticText"])))
      // detox 16.9.2
      // element(by.label("info text").and(by.traits(["text"])))
    ).toBeVisible();
  });
  it("should have info button", async () => {
    await expect(
      element(by.label("info.circle").and(by.traits(["button"])))
    ).toBeVisible();
  });
});
