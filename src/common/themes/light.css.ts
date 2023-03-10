import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = {
  color: {
    black: '#000',
    white: '#ffffff',
    primaryText: '#094e47',
    secondaryText: '#80aaa4',
    red700: '#e74148',
    yellow300: '#ffcb77',
    offWhite: '#f4f2ef',
    green100: '#f5fffe',
    green400: '#17c3b2',
    green600: '#15afa0',
    grey300: '#E3DFD9',
    grey400: '#e0e0e0',
  }, 
  space: {
    p2: '0.125rem', //2px
    p4: '0.25rem', //4px
    p8: '0.5rem', //8px
    p12: '0.75rem', //12px
    p16: '1rem', //16px
    p20: '1.25rem', //16px
    p24: '1.5rem', //16px
  },
  radius: {
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
  },
  fontSize: {
    sm: '0.75rem',
    base: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xlg: '1.5rem',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  }
}
export default createGlobalTheme(':root',{ //default theme
  color: {
    primaryText: vars.color.primaryText,
    colorWhite: vars.color.white,
    colorBlack: vars.color.black,
    background: vars.color.offWhite,
    danger: vars.color.red700,
    warning: vars.color.yellow300,
    buttonBorderColor: vars.color.green400,
    colorPrimaryGreen: vars.color.green400,
    colorPrimaryGreenDark: vars.color.green600,
    colorPrimaryGreenLight: vars.color.green100,
    colorSecondary: vars.color.grey300
  },
});
