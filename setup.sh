#!/bin/bash

# Build the package
npm run build

# Navigate to the test-sample directory
cd test-sample

# Install the package
npm install ../