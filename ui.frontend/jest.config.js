const baseJest = require("./base.jest");

module.exports = baseJest({
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
});
