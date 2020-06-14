import 'react-native';
import React from 'react';
import CategoryCard from '../../src/components/CategoryCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<CategoryCard />).toJSON();
    expect(tree).toMatchSnapshot();
});