import path from 'path';
import webpack from 'webpack';

const config = {
  entry: {
    js: './src/client.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'public', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
};

export default config;
