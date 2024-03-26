import { useCallback, useState } from 'react';
import TodoItems from './TodoItems';
import styled from 'styled-components';

// Style

const TodoContainer = styled.div`
  width: 450px;
  margin: 100px auto;
`;

const TodoInputArea = styled.div`
  text-align: center;
  height: 34px;
  margin-top: 16px;
`;

const TodoInput = styled.input`
  width: 320px;
  font-size: 13px;
  font-weight: 600;
`;

const AddButton = styled.button`
  margin-left: 10px;
`;

// Logic

export default function TodoModal() {
  const [todoValue, setTodoValue] = useState('');
  const [items, setItems] = useState([]);

  function handleInputChange(e) {
    setTodoValue(e.target.value);
  }

  const addTodoItem = useCallback(() => {
    setTodoValue('');
    setItems((prevItems) => [...prevItems, todoValue]);
  }, [todoValue]);

  const deleteTodoItem = useCallback((index) => {
    setItems((prevItems) =>
      prevItems.filter((item, itemIndex) => itemIndex !== index)
    );
  }, []);

  const handleEnterKey = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (e.nativeEvent.isComposing) {
          return;
        }

        setTodoValue('');
        setItems((prevItems) => [...prevItems, todoValue]);
      }
    },
    [todoValue]
  );

  return (
    <TodoContainer className="window">
      <div className="title-bar">
        <div className="title-bar-text">To do</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>

      <TodoInputArea className="window-body">
        <TodoInput
          type="text"
          onKeyDown={handleEnterKey}
          onChange={handleInputChange}
          value={todoValue}
        ></TodoInput>
        <AddButton onClick={addTodoItem}>Add</AddButton>
      </TodoInputArea>
      <TodoItems items={items} onDelete={deleteTodoItem} />
    </TodoContainer>
  );
}
