export default {
  testEnvironment: 'jsdom', // Needed for DOM APIs in React Testing Library
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Use Babel to transpile JSX/TSX
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Load extra matchers
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore build outputs
};
