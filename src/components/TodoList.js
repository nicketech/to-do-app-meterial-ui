import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

const TodoList = ({filteredTodos}) => {

  return (
    <div>
      { filteredTodos ?
        filteredTodos.map((todo, index) => (
          <div key={index}>
            <Todo 
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
              editing={todo.editing}
            />
          </div>
        ))
        : 
          <div></div>
      }
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    filteredTodos: state.filteredTodos
  }
}

export default connect(mapStateToProps)(TodoList);
