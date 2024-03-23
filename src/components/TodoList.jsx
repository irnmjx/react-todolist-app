import styled from 'styled-components';

// Style

const Wrapper = styled.ul`
  padding: 0;
  margin-left: 26px;
  margin-right: 26px;
`;

const Lists = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.li`
  font-size: 14px;
  padding: 3px 0;
  list-style-type: none;
  margin-right: 10px;
`;

// Logic

export default function TodoList({ list }) {
  return (
    <Wrapper>
      {list.map((element) => (
        <Lists key={element}>
          <List>{element}</List>
          <button>Delete</button>
        </Lists>
      ))}
    </Wrapper>
  );
}
