module.exports = {
  testEnvironment: "node",
  transform: {
    '^.+\\.m?[jt]s$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
  testMatch: [
    "**/src/tests/**/*.test.mjs",
    "**/src/tests/**/*.test.js",
  ],
};
