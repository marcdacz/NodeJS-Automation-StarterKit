module.exports = options => {
  return {
    id: "backstop_default",
    viewports: [
      {
        label: "phone",
        width: 320,
        height: 480
      },
      {
        label: "tablet",
        width: 768,
        height: 1024
      },
      {
        label: "desktop",
        width: 1920,
        height: 1080
      }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: options.scenarios,
    paths: {
      bitmaps_reference: "bitmaps_reference",
      bitmaps_test: "bitmaps_test",
      engine_scripts: "scripts",
      html_report: "html_report",
      ci_report: "ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
      args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 10,
    debug: false,
    debugWindow: false
  }
}