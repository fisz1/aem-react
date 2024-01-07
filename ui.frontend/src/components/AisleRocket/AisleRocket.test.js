import React from 'react';
import AisleRocket from './AisleRocket';
import { render } from "@testing-library/react";
import axios from 'axios';

jest.mock('axios');


describe('AisleRocket Component', () => {
  it('should render the AisleRocket component on page', () => {
    const { getByTestId } = render(<AisleRocket />);

    expect(getByTestId("AisleRocket")).toBeInTheDocument();
  });
});
