# Testing instructions

## Setup and Running unit tests

In the root of the configcat-vue directory, run the `run.sh` script.

```bash
./test/run.sh
```

This will do the following:

- **Build the configcat-vue npm package** - Generates a `dist` folder in the root of the configcat-vue directory with any updates to the library.

- **Setup the test-sample app** - Installs the base dependencies for the test-sample as well as the `configcat-vue` npm package from the `dist` folder (which was built in the previous step).

- **Run the unit tests** - Runs the unit tests for the `configcat-vue` library.

## Instructions for performing E2E testing

In the previous step, the `run.sh` script will have installed the dependencies for the test-sample app. The section below will walk you through the steps to run the test-sample app and perform E2E testing.


