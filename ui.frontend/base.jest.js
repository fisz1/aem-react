const path = require("path");

module.exports = (override = {}) => {
  return {
    moduleNameMapper: {
      "\\.(css|scss)$": "jest-css-modules",
      "\\.(svg|png)$": path.resolve(__dirname, "svgrMock.js"),
      "@jti/frontend-libs/(.*)": path.resolve(__dirname, "..", "$1"),
      "@api/(.*)": "<rootDir>/src/api/$1",
      "^axios$": "axios/dist/node/axios.cjs",
    },
    setupFiles: ["react-app-polyfill/jsdom"],
    setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],
    testMatch: ["<rootDir>/src/**/__tests__/*.{js,jsx,ts,tsx}", "<rootDir>/**/*.test.{js,jsx,ts,tsx}"],
    testEnvironment: "jest-environment-jsdom",
    testEnvironmentOptions: {
      url: "http://localhost/",
    },
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"],
    testPathIgnorePatterns: [
      "<rootDir>\\**\\__mocks__\\*",
      "<rootDir>\\**\\__snapshots__\\*",
      "<rootDir>\\**\\*.test.*",
    ],
    moduleFileExtensions: [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node",
      "svg",
      "png",
    ],
    ...override,
  };
};
