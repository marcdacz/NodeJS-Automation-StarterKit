module.exports = settings => {
  return {
    scenarios: [
      {
        label: 'Homepage Test',
        url: settings.baseUrl,
        delay: settings.longDelay
      }
    ]
  }
}