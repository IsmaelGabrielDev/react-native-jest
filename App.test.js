import { expect } from '@jest/globals'
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Tela de renderização do App React Native', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
});