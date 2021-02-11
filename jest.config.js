module.exports = {
  "testRegex": ".+\\.spec\\.ts$",
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  "globals": {
    "ts-jest": {
      "diagnostics": true
    }
  }
};
