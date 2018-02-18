import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

// Import test object.
import { Jokes } from '../../src/Jokes';

describe('<Jokes>', () => {
    it('should render', () => {
        const wrapper = shallow(<Jokes />);
        expect(wrapper).toMatchSnapshot();
    });
});
