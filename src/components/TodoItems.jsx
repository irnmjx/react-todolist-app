import styled from 'styled-components';

// Style

const TodoItemContainer = styled.ul`
  padding: 0;
  margin-left: 26px;
  margin-right: 26px;
`;

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoItem = styled.li`
  font-size: 14px;
  padding: 3px 0;
  list-style-type: none;
  margin-right: 10px;
`;

// Logic

export default function TodoList({ items, onDelete }) {
  return (
    <TodoItemContainer>
      {items.map((item, index) => (
        <TodoItemWrapper key={index}>
          <TodoItem>{item}</TodoItem>
          <button onClick={() => onDelete(index)}>Delete</button>
        </TodoItemWrapper>
      ))}
    </TodoItemContainer>
  );
}
