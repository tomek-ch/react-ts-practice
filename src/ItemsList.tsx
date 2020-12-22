import React from 'react';
import Item from './Item';
import { ToDoItem } from './App';

interface Props {
    setItems: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
    items: ToDoItem[];
}

function ItemsList({ items, setItems }: Props) {
    

  const todos = items.map(item => <Item
    key={item.id}
    item={item}
    setItems={setItems}
  />);

    return (
        <>
            {todos}
        </>
    );
}

export default ItemsList;