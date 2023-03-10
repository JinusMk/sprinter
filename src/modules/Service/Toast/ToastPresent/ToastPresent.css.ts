
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import theme, { vars } from 'common/themes/light.css';

export default {
  toastContentWrapper: style({
    display:'flex',
    flexDirection: 'column'
  }),
  body: style({
    display:'flex',
    flexDirection: 'column'
  }),
  title:style( {
    fontWeight: vars.fontWeight.medium,
  },)
}
export const toastStyles = recipe({
    base: {
      borderRadius: vars.radius.base,
      fontSize: vars.fontSize.base,
      padding: vars.space.p12,
      marginBottom: vars.space.p4,
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    variants: {
      toastType: {
        default: {
          backgroundColor: theme.color.colorBlack,
          color: theme.color.colorWhite
        },
        success: {
          backgroundColor: theme.color.colorPrimaryGreen,
          color: theme.color.colorWhite
        },
        error: {
          backgroundColor: theme.color.danger,
          color: theme.color.colorWhite
        },
      }
    }
})
