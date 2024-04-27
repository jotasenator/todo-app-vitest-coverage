/* eslint-disable react/prop-types*/
import { Button } from "./Button";

export const OrderList = ( { tasks, handleDone, handleClear } ) => {
    return (
        <ol>
            { tasks.map( ( { taskName, isDone } ) => (
                <li className={ isDone ? "Done" : "Undone" } key={ taskName }>
                    { taskName }{ " " }
                    <Button
                        handleClick={ () => handleDone( taskName ) }
                        text={ !isDone ? "Done" : "Undone" }
                    />
                    <Button handleClick={ () => handleClear( taskName ) } text="Clear" />
                </li>
            ) ) }
        </ol>
    );
};
