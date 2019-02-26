const getBaseUrl = () => {
  let env = process.env.NODE_ENV;
  let baseUrl = 'https://react-shopping-cart-67954.firebaseapp.com/';
  if (env === 'DEV') {
    baseUrl = 'https://react-shopping-cart-67954.firebaseapp.com/'; // UPDATE THIS TO YOUR DEV ENV
  }
  return baseUrl;
}

module.exports = {
  baseUrl: getBaseUrl(),
  misMatchThreshold: 0.05,
  shortDelay: 500,
  longDelay: 3000,
  veryLongDelay: 5000
}
