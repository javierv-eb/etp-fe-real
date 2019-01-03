module.exports = {
    rootDir: '..',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupTestFrameworkScriptFile: '<rootDir>/test_config/jest/setup.js',
    testMatch: ['**/src/**/*.unit.spec.js', '**/*.unit.spec.js'],
    testResultsProcessor: 'jest-junit',
    testURL: 'http://localhost/',
    testPathIgnorePatterns: [
       '/node_modules/',
       '/test_config'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)$': '<rootDir>/__mocks__/mock.js',
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    collectCoverageFrom: [
        '**/src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ]
    
};
