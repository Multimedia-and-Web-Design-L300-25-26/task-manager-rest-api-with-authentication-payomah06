export default {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  testEnvironmentVariables: {
    NODE_ENV: 'test'
  }
};
