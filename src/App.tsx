import React, { useState, useEffect } from 'react';
import AddForm from './AddForm';
import ItemsList from './ItemsList';

export interface ToDoItem {
  id: number;
  text: string;
  time: number;
  done: boolean;
}

function App() {
  const [ toDoList, setToDoList ] = useState<ToDoItem[]>(JSON.parse(localStorage.getItem('list') || '[]'));

  useEffect(() => {
    setToDoList(prev => prev);
    localStorage.setItem('list', JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="App">
      <AddForm
        setToDoList={setToDoList}
      />
      <ItemsList items={toDoList} setItems={setToDoList} />
    </div>
  );
}

export default App;
