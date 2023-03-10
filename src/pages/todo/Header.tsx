import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--major);
  padding: 0 16px;

  h3 {
    font-weight: 400;
    user-select: none;
  }
`;

const StyledGreetingText = styled.div`
  color: var(--gray);
  span {
    color: var(--major);
  }
`;

interface Props {
  userName: string
}
const Header:React.FC<Props> = ({userName}) => {
  return (
    <StyledHeader>
      <h3>Tasks</h3>
      <StyledGreetingText>
        Hi <span>{userName}</span>
      </StyledGreetingText>
    </StyledHeader>
  );
};

export default Header;
