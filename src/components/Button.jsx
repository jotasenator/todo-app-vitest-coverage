/* eslint-disable react/prop-types */
export const Button = ( { text, handleClick } ) => {
    return <button onClick={ handleClick }>{ text }</button>;
};
