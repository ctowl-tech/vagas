// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/http/*.ts',
    '!<rootDir>/src/**/errors/*.ts',
    '!<rootDir>/src/**/main/**/*.ts',
    '!<rootDir>/src/**/*config.ts',
    '!<rootDir>/src/**/migrations/*.ts',
    '!<rootDir>/src/**/infra/db/**/*.ts',
    '!<rootDir>/src/**/tests/**/*.ts'

  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['***/src/**/*.ts?(x)', '**/?(*.)(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^@main/(.*)$': '<rootDir>/src/main/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@util/(.*)$': '<rootDir>/src/util/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1'
  }
  // clearMocks: true,

  // coverageProvider: 'v8'

}
