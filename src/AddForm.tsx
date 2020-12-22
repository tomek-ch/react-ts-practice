import React, { useState, useRef } from 'react';
import TextField from './TextField';
import { ToDoItem } from './App';

function AddForm({ setToDoList }: { setToDoList: React.Dispatch<React.SetStateAction<ToDoItem[]>> }) {
    const [ text, setText ] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setToDoList(prev => [...prev, {
            id: Date.now(),
            text,
            time: Date.now(),
            done: false,
        }]);

        setText('');
        inputRef.current?.focus();
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <TextField
                text={text}
                setText={setText}
                inputRef={inputRef}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddForm;