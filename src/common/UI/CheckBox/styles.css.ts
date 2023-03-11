import { style } from '@vanilla-extract/css'
import theme, {vars} from 'common/themes/light.css'

export const checkboxStyles = style({
    display: 'flex',
    cursor: 'pointer',
    appearance: "none",
    width: "1.20rem",
    height: "1.20rem",
    border: `1.5px solid ${theme.color.colorPrimaryGreen}`,
    borderRadius: 4,
    position: "relative",
    margin: '0 8px 0 0',
    ':after': {
        content: "",
        position: 'absolute',
        display: 'none',
        left: 4,
        top: 0,
        width: 5,
        height: 10,
        border: 'solid white',
        borderWidth: '0 3px 3px 0',
        transform: 'rotate(45deg)',
    },
    ":checked": {
        backgroundColor: theme.color.colorPrimaryGreen,
    },
    selectors: {
        '&:checked:after': {
          display: 'block',
        },
      },
})

export default {
    base: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    }),
    label: style({
        display: 'flex',
        color: theme.color.primaryText,
        fontSize: vars.fontSize.base,
        cursor: 'pointer',
        alignItems: 'center'
    }),
}