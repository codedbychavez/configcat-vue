#!/bin/bash

# Build the package - This will create a dist folder in the parent directory with any new changes.
npm run build

# Pack the package - This will create a tarball in the parent directory with any new changes.
npm pack

# Rename the tarball to configcat-vue.tgz
mv configcat-vue-*.tgz configcat-vue.tgz

# Move the tarball to the test-sample directory
mv configcat-vue.tgz test-sample

# SETUP SAMPLE APP FOR E2E TESTING

# Navigate to the test-sample directory
cd test-sample

# Install base dependencies
npm install

# RUNNING THE TESTS

# Navigate out of the test-sample directory
cd ..

# Run the tests for the configcat-vue package
npm run test

# CLEANUP

# Remove the tarball from the test-sample directory
rm test-sample/configcat-vue.tgz
