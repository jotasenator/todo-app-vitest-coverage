/* eslint-disable react/prop-types */
import { Button } from "./Button";


export const Input = ( { inputValue, handleChange, handleClick } ) => {
    return (
        <>
            <input
                type="text"
                name="task"
                value={ inputValue }
                onChange={ handleChange }
            />
            <Button handleClick={ handleClick } text="Adiciona todo" />
        </>
    );
};
