module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  resolver: '<rootDir>/jest.resolver.js',
  transformIgnorePatterns: [
    'node_modules/(?!@angular|@firebase|firebase|@ngrx)',
  ],
};
