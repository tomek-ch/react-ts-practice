import React, { useState, useEffect } from 'react';
import { ToDoItem } from './App';

interface Props {
    done: boolean;
    id: number;
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

function Checkbox({ setItems, id, done }: Props) {
    const [ completed, setCompleted ] = useState(done);

    useEffect(() => {
        setItems(prev => prev.map(item => item.id === id ? {
            ...item,
            done: completed,
        } : item).sort((a, b) => b.time - a.time).sort((a, b) => Number(a.done) - Number(b.done)));
    }, [completed, id, setItems]);

    const toggle = () => {
        setCompleted(prev => !prev);
    };

    return (
        <input type="checkbox"
            checked={completed}
            onChange={toggle}
        />
    )
}

export default Checkbox;