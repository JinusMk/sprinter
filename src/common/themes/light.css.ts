import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = {
  color: {
    black: '#000',
    white: '#ffffff',
    primaryText: '#094e47',
    secondaryText: '#80aaa4',
    colorMenu: '#fe6d73',
    colorSuccess: '#17c3b2',
    colorDanger: '#e74148',
    colorWarning: '#ffcb77',
    colorBackground: '#f4f2ef',
    colorGrey: '#e0e0e0',
    colorLightGreen: '#f5fffe',
    colorDarkGreen: '#15afa0',
    colorLightGrey: '#E3DFD9',
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
    lg: '1.125rem',
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
    background: vars.color.colorBackground,
    danger: vars.color.colorDanger,
    warning: vars.color.colorWarning,
    buttonBorderColor: vars.color.colorGrey,
    colorPrimaryGreen: vars.color.colorSuccess,
    colorPrimaryGreenDark: vars.color.colorDarkGreen,
    colorPrimaryGreenLight: vars.color.colorLightGreen,
    colorSecondary: vars.color.colorLightGrey
  },
});
