import styled from 'styled-components';

export const SubmitId = styled.button`
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: none;
  margin-top: 290px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: ${({ disabled }) => (disabled ? '#DBDBDB' : '#FF6A21')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
