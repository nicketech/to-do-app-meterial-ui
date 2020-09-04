import React from 'react';
import Todo from './Todo';

export default function TodoList({filteredlist, completelist, setCompletelist, setText}) {
    return (
        <div className="current-tasks">
            {
                filteredlist.map(todo => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        checked={todo.checked}
                        completelist={completelist}
                        setCompletelist={setCompletelist}
                        editing={todo.editing}
                    />
                ))
            }
        </div>
    )
}