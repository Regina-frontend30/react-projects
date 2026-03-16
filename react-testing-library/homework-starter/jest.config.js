export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: ["**/*.test.(ts|tsx|js|jsx)"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/package.json",
  },
};
