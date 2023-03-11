import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import theme, { vars } from 'common/themes/light.css'

export default {
    wrapper: style({
        display: 'flex',
        alignItems: 'center',
        marginBottom: vars.space.p12,
        marginTop: vars.space.p12,
        justifyContent: 'space-between'
    }),
    label: style({
        display: 'flex',
        marginLeft: vars.space.p4
    }),
    header: style({
        display: 'flex',
        marginRight: vars.space.p8
    }),
    tasks: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    })
}

export const summaryTextStyles = recipe({
    base: {
        display: 'flex',
        flexDirection: 'row',
        color: theme.color.colorPrimaryGreen,
        alignItems: 'center'
    },
    variants: {
        type: {
            success: {
                color: theme.color.colorPrimaryGreen
            },
            danger: {
                color: theme.color.danger
            },
        }
    }
})