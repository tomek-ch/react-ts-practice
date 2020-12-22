import React, { useState } from 'react';
import { ToDoItem } from './App';

interface Props {
    id: number;
    text: string;
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

function ItemText({ text, setItems, id }: Props) {
    const [ value, setValue ] = useState(text);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
        setItems(prev => prev.map(item => item.id === id ? {
            ...item,
            text: value,
            time: Date.now(),
        }: item).sort((a, b) => b.time - a.time).sort((a, b) => Number(a.done) - Number(b.done)));
    };

    return (
        <input
            value={value}
            onChange={handleChange}
        />
    );
}

export default ItemText;