module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 1%", "last 2 version", "ie >= 11"]
        },
        modules: false, // false 트리쉐이킹 사용(import 되지 않은 export 를 "떨어 버리기(shake)" 버리고 더 작게 번들링)
        corejs: 3,
        debug: true,
        shippedProposals: true // 트랜스파일 시 소스에서 쓰는 폴리필을 자동으로 넣어 줌
      }
    ],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ];
  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-runtime"] // 전역 오염 x, 사용된 폴리필 메서드만 포함시키고, 해당 폴리필 메서드를 사용하도록 원본 코드를 변경
  ]
  return {
    presets,
    plugins
  };
} 