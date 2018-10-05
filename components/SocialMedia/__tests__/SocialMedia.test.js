import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SocialMedia from '../SocialMedia';

describe('SocialMedia', () => {
  it('it should render properly with no props', () => {
    createShallowSnapshotTest(<SocialMedia />);
  });
});
