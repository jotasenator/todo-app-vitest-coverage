import { it, expect, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '../components/Input';

it( 'renders the input field with the provided value', () => {
    const inputValue = 'Hello, world!';
    const { getByDisplayValue } = render( <Input inputValue={ inputValue } /> );
    const inputElement = getByDisplayValue( inputValue );
    expect( inputElement ).toBeInTheDocument();
} );

it( 'calls the handleChange function when input value changes', () => {
    const mockHandleChange = vitest.fn();
    const { getByRole } = render(
        <Input inputValue="" handleChange={ mockHandleChange } />
    );
    const inputElement = getByRole( 'textbox' );

    // Simulate a change in input value
    fireEvent.change( inputElement, { target: { value: 'New value' } } );

    // Verify that the handleChange function was called
    expect( mockHandleChange ).toHaveBeenCalled();
} );