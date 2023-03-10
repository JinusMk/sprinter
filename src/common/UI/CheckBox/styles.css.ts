import { style } from '@vanilla-extract/css'
import theme, {vars} from 'common/themes/light.css'

export default {
    base: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }),
    checkbox: style({
        display: 'flex',
        cursor: 'pointer',
        appearance: "none",
        width: "1.25rem",
        height: "1.25rem",
        border: `1px solid ${theme.color.buttonBorderColor}`,
        borderRadius: 4,
        position: "relative",
        margin: '0 8px 0 0',
        ':after': {
            content: "",
            position: 'absolute',
            display: 'none',
            left: 3,
            top: 0,
            width: 5,
            height: 10,
            border: 'solid white',
            borderWidth: '0 3px 3px 0',
            transform: 'rotate(45deg)',
        },
        ":checked": {
            backgroundColor: theme.color.colorPrimaryGreenDark,
        },
        ':checked:after': {
            display: 'block'
        }
    }),
    label: style({
        display: 'flex',
        color: theme.color.primaryText,
        fontSize: vars.fontSize.base,
        cursor: 'pointer',
        alignItems: 'center'
    }),
}