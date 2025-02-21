module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.cjs'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.cjs'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      configFile: './babel.config.cjs'
    }]
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(@mui|@emotion|@fullcalendar|react-pro-sidebar)/)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  resolver: undefined
}; 