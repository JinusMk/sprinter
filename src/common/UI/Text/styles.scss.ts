import { style } from '@vanilla-extract/css'
import { vars } from 'common/themes/light.css'

export default {
    textBase: style({
        display: 'flex',
        flexDirection: 'column',
        color: vars.color.primaryText,
        fontSize: vars.fontSize.base
    }),
}