import { useState } from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';

// Style

const Window = styled.div`
  width: 450px;
  margin: 100px auto;
`;

const WindowBody = styled.div`
  text-align: center;
  height: 34px;
  margin-top: 16px;
`;

const Input = styled.input`
  width: 320px;
  font-size: 13px;
  font-weight: 600;
`;

const Button = styled.button`
  margin-left: 10px;
`;

// Logic

export default function TodoModal() {
  const [todoValue, setTodoValue] = useState('');
  const [list, setList] = useState([]);

  function inputHandler(e) {
    setTodoValue(e.target.value);
  }

  function addTodo() {
    setTodoValue('');
    setList([...list, todoValue]);
  }

  return (
    <Window className="window">
      <div className="title-bar">
        <div className="title-bar-text">To do</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>

      <WindowBody className="window-body">
        <Input type="text" onChange={inputHandler} value={todoValue}></Input>
        <Button onClick={addTodo}>Add</Button>
      </WindowBody>
      <TodoList list={list} />
    </Window>
  );
}
