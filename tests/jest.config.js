module.exports = {
  moduleFileExtensions: ["js", "ts"],
  preset: "jest-playwright-preset",
  testMatch: ["**/*.test.*"],
  transform: {
    "\\.ts$": "ts-jest",
  },
};
