import { recipe } from '@vanilla-extract/recipes';
import theme, { vars } from 'common/themes/light.css'

export const allocationItemStyles = recipe({
    base: {
      marginBottom: vars.space.p8,
      ':last-child': {
        marginBottom: 0
      }
    },
    variants: {
      overflow: {
        true: {
          color: theme.color.danger
        },
        false: {
          color: theme.color.primaryText
        }
      },
    }
  })