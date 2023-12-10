#!/bin/bash

# Build the package - This will create a dist folder in the parent directory with any new changes.
npm run build

# SETUP SAMPLE APP FOR E2E TESTING

# Navigate to the test-sample directory
cd test-sample

# Install base dependencies
npm install

# Install the configcat-vue package from the parent directory
npm install ../

# RUNNING THE TESTS

# Navigate out of the test-sample directory
cd ..

# Run the tests for the configcat-vue package
npm run test
