import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  height: 640px;
  border: 1px solid black;
  padding: 10px;
`;

export const AddressBox = styled(DaumPostcode)`
  width: 360px;
  height: 640px;
  z-index: 10;
  border: 1px solid black;
`;
