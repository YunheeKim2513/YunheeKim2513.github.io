const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, '../src/Pages/index.tsx')],
  module: {
    rules: [
      {
        test: /\.(tsx|jsx)$/
      }
    ]
  }
};