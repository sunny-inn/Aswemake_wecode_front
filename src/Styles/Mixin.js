import { css } from 'styled-components';

export const mixins = {
  flexbox: (direction = 'row', align = 'center', justify = 'center') => `
    display : flex;
    flex-direction : ${direction};
    align-items:${align};
    justify-content : ${justify}`,
};
