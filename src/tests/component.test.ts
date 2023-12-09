import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';

import FeatureWrapper from '../components/FeatureWrapper.vue';

test('mount FeatureWrapper component', async () => {
    expect(FeatureWrapper).toBeTruthy();
});

// TODO: Define the wrapper here: https://github.com/vitest-dev/vitest/blob/main/examples/vue/test/basic.test.ts