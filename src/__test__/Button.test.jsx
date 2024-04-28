import { it, expect, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '../components/Button';

it( 'renders the button with the provided text', () => {
    const buttonText = 'Click me';
    const { getByText } = render( <Button text={ buttonText } /> );
    const buttonElement = getByText( buttonText );
    expect( buttonElement ).toBeInTheDocument();
} );

it( 'calls the handleClick function when clicked', () => {
    const mockHandleClick = vitest.fn();
    const buttonText = 'Click me';
    const { getByText } = render(
        <Button text={ buttonText } handleClick={ mockHandleClick } />
    );
    const buttonElement = getByText( buttonText );

    // Simulate a button click
    fireEvent.click( buttonElement );

    // Verify that the handleClick function was called
    expect( mockHandleClick ).toHaveBeenCalled();
} );
