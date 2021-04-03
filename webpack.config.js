const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'markdown-to-bbcode.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'markdown_to_bbcode',
      type: 'umd',
    }
  },
};
