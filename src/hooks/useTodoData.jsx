import { useState } from "react";

export const useTodoData = () => {
    const [ inputValue, setInputValue ] = useState( "" );
    const [ tasks, setTasks ] = useState( [] );

    const handleClick = () => {
        const isDuplicate = tasks.some( ( task ) => task.taskName === inputValue );
        inputValue !== "" &&
            !isDuplicate &&
            setTasks( ( prev ) => [ ...prev, { taskName: inputValue, isDone: false } ] );
        setInputValue( "" );
        isDuplicate && alert( "Esta tarea ya ha sido adicionada" );
    };

    const handleChange = ( e ) => {
        e.preventDefault();
        setInputValue( e.target.value );
    };

    const handleDone = ( name ) => {
        const updatedTasks = tasks.map( ( task ) =>
            task.taskName === name ? { ...task, isDone: !task.isDone } : task
        );
        setTasks( updatedTasks );
    };

    const handleClear = ( name ) => {
        const filteredTasks = tasks.filter( ( task ) => task.taskName !== name );
        setTasks( filteredTasks );
    };
    return {
        inputValue,
        tasks,
        handleChange,
        handleClear,
        handleClick,
        handleDone,
    };
};
