// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
  ],
  roots: ["<rootDir>"],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};
