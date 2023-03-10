import { recipe } from '@vanilla-extract/recipes'
import theme, {vars} from 'common/themes/light.css'

export const textStyles = recipe({
    base : {
        display: 'flex',
        flexDirection: 'column',
        color: theme.color.primaryText,
        fontSize: vars.fontSize.base
    },
    variants: {
        fontSize: {
            sm: {
                fontSize: vars.fontSize.sm
            },
            base: {
                fontSize: vars.fontSize.base
            },
            md: {
                fontSize: vars.fontSize.md
            },
            lg: {
                fontSize: vars.fontSize.lg
            },
            xlg: {
                fontSize: vars.fontSize.xlg
            }
        },
        fontWeight: {
            regular: {
                fontWeight: vars.fontWeight.regular,
            },
            medium: {
                fontWeight: vars.fontWeight.medium,
            },
            semiBold: {
                fontWeight: vars.fontWeight.semiBold,
            },
            bold: {
                fontWeight: vars.fontWeight.bold,
            },
        }
    }
})