module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/config/css.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
