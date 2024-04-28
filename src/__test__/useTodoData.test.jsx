import { it, expect, describe, beforeEach, vitest } from 'vitest';
import { renderHook } from "@testing-library/react";

import { useTodoData } from '../hooks/useTodoData';
import { act } from 'react';


describe( "useFetchedData", () => {

    let result;

    beforeEach( () => {
        result = renderHook( () => useTodoData() ).result;
    } );

    it( "should return the initial values for inputValue and tasks", () => {
        const { inputValue, tasks } = result.current;


        expect( inputValue ).toBe( '' );
        expect( tasks ).toStrictEqual( [] );
    } );


    it( "should change inputValue from '' to  'Task1' ", () => {
        const { handleChange } = result.current;

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        expect( result.current.inputValue ).toBe( 'Task1' );

    } );

    it( "should create a new array after handleClick ", () => {

        const { handleChange } = result.current;

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        expect( result.current.tasks ).toHaveLength( 1 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: false } ] );

        act( () => {
            handleChange( { target: { value: 'Task2' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        expect( result.current.tasks ).toHaveLength( 2 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: false }, { taskName: 'Task2', isDone: false } ] );

    } );

    it( "should delete the 'Task1' value from the array ", () => {
        const { handleChange } = result.current;

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        expect( result.current.tasks ).toHaveLength( 1 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: false } ] );

        act( () => {
            handleChange( { target: { value: 'Task2' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        expect( result.current.tasks ).toHaveLength( 2 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: false }, { taskName: 'Task2', isDone: false } ] );

        act( () => {
            result.current.handleClear( 'Task1' );
        } );

        expect( result.current.tasks ).toHaveLength( 1 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task2', isDone: false } ] );

    } );

    it( "should change the isDone value fron 'false' to 'true' ", () => {

        const { handleChange } = result.current;

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        act( () => {
            result.current.handleDone( 'Task1' );
        } );

        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: true } ] );

    } );

    it( "Should return an alert if the value we try to add to the array exists", () => {

        const { handleChange } = result.current;

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        act( () => {
            result.current.handleClick();
        } );

        act( () => {
            handleChange( { target: { value: 'Task1' } } );
        } );

        const alertSpy = vitest.spyOn( window, 'alert' );

        act( () => {
            result.current.handleClick();
        } );

        expect( alertSpy ).toHaveBeenCalledWith( "Esta tarea ya ha sido adicionada" );

        expect( result.current.tasks ).toHaveLength( 1 );
        expect( result.current.tasks ).toStrictEqual( [ { taskName: 'Task1', isDone: false } ] );



    } );



} );