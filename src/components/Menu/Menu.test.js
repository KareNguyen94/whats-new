import React from 'react';
import Menu from './Menu';

import { render, fireEvent } from 
'@testing-library/react';
import '@testing-library/jest-dom';

describe('Menu', () => {
  it('displays correct agurment to switchPage when called', () => {

    const mockSwitchPage = jest.fn();

    const { getByText } = render(<Menu
      onClick={mockSwitchPage}
    >
    </Menu>)

    fireEvent.click(getByText('Local'), { target: {name: 'Local' } })

    expect(mockSwitchPage).toHaveBeenCalledWith({name: 'Local'})
  })
});