import React from 'react';
import { ToDoItem } from './App';

interface Props {
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
    id: number;
}

function RemoveBtn({ setItems, id }: Props) {

    const handleClick = () => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <button onClick={handleClick}>
            Remove
        </button>
    );
}

export default RemoveBtn;