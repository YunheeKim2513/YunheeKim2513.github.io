const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, '../src/Pages/index.tsx')],
  resolve: { 
    modules: ['node_modules'], // 모듈을 찾을 디렉토리
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 사용할 확장자
    alias: { 
      '@': path.resolve(__dirname, 'src/'),
      'apis': path.resolve(__dirname, '../src/Apis'),
      'assets': path.resolve(__dirname, '../src/Assets'),
      'components': path.resolve(__dirname, '../src/Components'),
      'constants': path.resolve(__dirname, '../src/Constants'),
      'pages': path.resolve(__dirname, '../src/Pages'),
      'utiles': path.resolve(__dirname, '../src/Utiles')
    } // 특정 모듈을 더 쉽게 리졸브하기 위해 별칭 설정
  }, // 모듈 사용 설정
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i, // 조건
        exclude: /node_modules/, // 제외할 경로
        loader: 'babel-loader' // 적용할 로더 설정
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'url-loader'
      }
    ]
  }, 
  plugins: [
  ]
};