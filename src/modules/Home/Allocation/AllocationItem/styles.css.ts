import { recipe } from '@vanilla-extract/recipes';
import theme from 'common/themes/light.css'

export const allocationItemStyles = recipe({
    base: {
      width: 100,
      color: theme.color.primaryText,
      justifyContent: 'left'
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
      speed: {
        fast: {
          color: theme.color.warning,
          border: 10,
        }
      }
    }
  })