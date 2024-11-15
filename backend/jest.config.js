export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  globals: {
    "ts-jest": {
      useESM: true
    }
  },
  testEnvironment: "node"
};
