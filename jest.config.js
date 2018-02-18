/* eslint-disable flowtype/require-valid-file-annotation, flowtype/require-variable-type */

// Babel should not transform these modules since they create testing errors.
// See: http://facebook.github.io/jest/docs/en/tutorial-react-native.html#transformignorepatterns-customization
const babelIgnoredModules = [
    'react-native',
    'react-navigation',
].join('|');

module.exports = {
    preset: 'react-native',
    testEnvironment: 'node',
    coverageDirectory: '<rootDir>/__tests__/__coverage__/',
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        __DEV__: true,
        window: true,
    },
    automock: false,
    setupFiles: [
        '<rootDir>/__tests__/__setup__/index.js',
    ],
    testRegex: '(/__tests__/.*(\\.|/)(test|spec))\\.jsx?$',
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
    },
    transformIgnorePatterns: [
        `node_modules/(?!(${babelIgnoredModules})/)`,
    ],
};
