import { css } from 'styled-components';

export const flex = (jc = 'center', ai = 'center', fd = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${fd};
`;
