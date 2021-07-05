const path = require('path');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 디버그를 하기 위해 원본파일 어디에서 에러가 났는지 연결 시켜주는 것이 소스맵
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3100,
    historyApiFallback: true, // history api 를 사용시에 index.html 을 fallback 으로 설정
    compress : true, // 웹 성능 최적화에 관한 기법으로 gzip 파일들의 본래 크기를 줄이는 것
    inline: true, // 실시간 재로딩 처리 옵션
  }
};