import type { Config } from 'jest';

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: 'ts-jest',
    testMatch: [
        "**/test/**/*.test.ts", // Match test files in the test directory
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/" // Ignore compiled files
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for transforming TypeScript files
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    verbose: true, // Print individual test results
};

export default config;
