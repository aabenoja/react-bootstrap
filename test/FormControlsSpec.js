import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import FormControls from '../src/FormControls';
import {shouldWarn} from './helpers';

describe('Form Controls', function () {
  describe('Static', function () {
    it('renders a p element wrapped around the given value', function () {
      const instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Static value='v' />
      );

      const result = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'p');
      result.props.children.should.equal('v');
    });

    it('getValue() pulls from either value or children', function () {
      let instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Static value='v' />
      );

      instance.getValue().should.equal('v');

      instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Static>5</FormControls.Static>
      );

      instance.getValue().should.equal('5');
    });

    it('throws an error if both value and children are provided', function () {
      const testData = { value: 'blah', children: 'meh' };
      const result = FormControls.Static.propTypes.children(testData, 'children', 'Static');

      result.should.be.instanceOf(Error);
    });
  });

  describe('Button', function () {
    it('renders an input button element with type=submit', function () {
      const instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" bsStyle="danger" wrapperClassName="test" />
      );

      const node = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input').getDOMNode();
      node.getAttribute('type').should.equal('submit');
      node.getAttribute('class').should.equal('btn btn-danger');
    });

    it('supports type=reset and type=submit', function () {
      let instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" type="button" />
      );

      let node = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input').getDOMNode();
      node.getAttribute('type').should.equal('button');

      instance = ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" type="reset" />
      );

      node = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input').getDOMNode();
      node.getAttribute('type').should.equal('reset');
    });

    it('throws warning about unsupported type', function () {
      ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" type="password" />
      );

      shouldWarn('propType: Invalid');
    });

    it('must not throw warning when bsStyle=danger', function () {
      ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" bsStyle="danger" />
      );

      console.warn.called.should.be.false;
    });

    it('throws warning about wrong type for bsStyle=error', function () {
      ReactTestUtils.renderIntoDocument(
        <FormControls.Button value="button" bsStyle="submit" />
      );

      shouldWarn('propType: Invalid');
    });

    it('throws a warning if given both children and a value property', function () {
      const testData = { value: 5, children: 'button' };
      const result = FormControls.Button.propTypes.value(testData, 'value', 'Button');

      result.should.be.instanceOf(Error);
      result.message.should.have.string('value and children');
    });

    it('does not throw an error for strings and numbers', function () {
      let testData = { children: 'EUREKA' };
      let result = FormControls.Button.propTypes.children(testData, 'children', 'Button');
      should.not.exist(result);

      testData = { value: 4 };
      result = FormControls.Button.propTypes.value(testData, 'children', 'Button');
      should.not.exist(result);
    });

    it('does not allow elements for children', function () {
      ReactTestUtils.renderIntoDocument(
        <FormControls.Button><span>blah</span></FormControls.Button>
      );

      shouldWarn('propType: Invalid');
    });
  });
});
