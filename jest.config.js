/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleDirectories: ['./node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/utils/jest-setup.ts'],
  reporters: ['default', 'jest-junit'],
};
