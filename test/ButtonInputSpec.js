import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ButtonInput from '../src/ButtonInput';
import {shouldWarn} from './helpers';

describe('ButtonInput', function () {
  it('Should throw a deprecation error', function () {
    ReactTestUtils.renderIntoDocument(
      <ButtonInput value="v" />
    );

    shouldWarn('deprecated');
  });
});
