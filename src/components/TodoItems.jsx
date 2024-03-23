import styled from 'styled-components';

// Style

const TodoContainer = styled.ul`
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

export default function TodoList({ list }) {
  return (
    <TodoContainer>
      {list.map((element) => (
        <TodoItemWrapper key={element}>
          <TodoItem>{element}</TodoItem>
          <button>Delete</button>
        </TodoItemWrapper>
      ))}
    </TodoContainer>
  );
}
