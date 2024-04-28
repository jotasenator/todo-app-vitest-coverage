import { it, expect, vitest, describe, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { OrderList } from '../components/OrderList';

describe( 'OrderList component', () => {

    let tasks1 = [];
    let tasks2 = [];
    beforeEach( () => {
        tasks1 = [
            { taskName: "Task 1", isDone: false },
        ];
        tasks2 = [
            { taskName: "Task 2", isDone: true },
        ];
    } );

    it( "renders a list of tasks with buttons", () => {


        const mockHandleDone = vitest.fn();
        const mockHandleClear = vitest.fn();

        const { getByText } = render(
            <OrderList
                tasks={ tasks1 }
                handleDone={ mockHandleDone }
                handleClear={ mockHandleClear }
            />
        );

        // Verify that task names and buttons are rendered
        expect( getByText( "Task 1" ) ).toBeInTheDocument();

        fireEvent.click( getByText( "Done" ) );

        const clearButton = getByText( "Clear" );
        expect( clearButton ).toBeInTheDocument();

        // Simulate button clicks
        fireEvent.click( clearButton );

        // Verify that the handleDone and handleClear functions were called
        expect( mockHandleDone ).toHaveBeenCalledWith( "Task 1" );
        expect( mockHandleClear ).toHaveBeenCalledWith( "Task 1" );
    } );

    it( "should render 'Done' in a button and the li class is 'Undone' ", () => {
        const { getByText, getAllByRole } = render( <OrderList tasks={ tasks1 } /> );

        const doneButton = getByText( "Done" );
        expect( doneButton ).toBeInTheDocument();

        const listElement = getAllByRole( "listitem" );
        expect( listElement.length ).toBeGreaterThan( 0 );

        const firstListElement = listElement[ 0 ];

        expect( firstListElement ).toHaveClass( "Undone" );
    } );

    it( "should render 'Done' in a button and the li class is 'Undone' ", () => {
        const { getByText, getAllByRole } = render( <OrderList tasks={ tasks2 } /> );

        const undoneButton = getByText( "Undone" );
        expect( undoneButton ).toBeInTheDocument();

        const listElement = getAllByRole( "listitem" );
        expect( listElement.length ).toBeGreaterThan( 0 );

        const firstListElement = listElement[ 0 ];

        expect( firstListElement ).toHaveClass( "Done" );
    } );



} )


