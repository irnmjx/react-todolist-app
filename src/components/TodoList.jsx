import styled from 'styled-components';

// Style

const Wrapper = styled.ul`
  padding: 0;
  margin-left: 26px;
`;

const List = styled.li`
  font-size: 14px;
  padding: 3px 0;
  list-style-type: none;
`;

// Logic

export default function TodoList({ list }) {
  return (
    <Wrapper>
      {list.map((element) => (
        <List key={element}>{element}</List>
      ))}
    </Wrapper>
  );
}
