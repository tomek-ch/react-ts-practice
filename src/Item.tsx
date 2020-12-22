import React from 'react';
import { ToDoItem } from './App';
import Checkbox from './Checkbox';
import ItemText from './ItemText';
import RemoveBtn from './RemoveBtn';

interface Props {
    item: ToDoItem;
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

function Item({ item: { id, text, done }, setItems }: Props) {
    return (
        <div>
            <Checkbox
                id={id}
                done={done}
                setItems={setItems}
            />
            <ItemText
                text={text}
                setItems={setItems}
                id={id}
            />
            <RemoveBtn id={id} setItems={setItems} />
        </div>
    );
}

export default Item;