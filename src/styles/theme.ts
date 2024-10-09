import { css, DefaultTheme } from 'styled-components';

const color = {
  WHITE: '#FFFFFF',
  BLACK: '#232323',
  BLUE100: '#E6EDF5',
  BLUE200: '#C1D3E7',
  BLUE300: '#9CBBD9',
  BLUE400: '#779ECB',
  BLUE500: '#5284BD',
  BLUE600: '#3D619F',
  BLUE700: '#2F527A',
};

export type Color = typeof color;

const typography = {
  title1: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
  `,
  body1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  `,
};

export type Typography = typeof typography;

export const theme: DefaultTheme = {
  color,
  typography,
};
