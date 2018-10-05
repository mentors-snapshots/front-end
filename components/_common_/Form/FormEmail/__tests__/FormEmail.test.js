/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormEmail from '../FormEmail';

describe('FormEmail', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<FormEmail id="test" />);
  });
});
