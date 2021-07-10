module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/jest.mock.style.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest.mock.file.js",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.*"],
};
