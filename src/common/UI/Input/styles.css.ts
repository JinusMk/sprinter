import { style } from '@vanilla-extract/css'
import theme, {vars} from 'common/themes/light.css'

export default {
    container: style({
        display: 'flex',
        flexDirection: 'column',
    }),
    label: style({
        fontSize: vars.fontSize.base,
        lineHeight: vars.space.p16,
        marginBottom: vars.space.p4
    }),
    input: style({
        padding: `0.453rem ${vars.space.p12}`,
        border: `1px solid ${theme.color.colorPrimaryGreen}`,
        borderRadius: vars.radius.base,
        boxShadow: 'none',
        outline: 'none',
        ':hover' : {
            border: `1px solid ${theme.color.colorPrimaryGreen}`,
            background: theme.color.colorPrimaryGreenLight
        },
        ':focus' : {
            border: `1px solid ${theme.color.colorPrimaryGreen}`,
            background: theme.color.colorPrimaryGreenLight
        },
        ':active' : {
            border: `1px solid ${theme.color.colorPrimaryGreen}`,
            background: theme.color.colorPrimaryGreenLight
        },
        '::-webkit-input-placeholder': {
            fontSize: vars.fontSize.sm,
            color: theme.color.colorSecondary
        }
    })
}