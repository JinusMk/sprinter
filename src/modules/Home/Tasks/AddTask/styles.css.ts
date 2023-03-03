import { style } from '@vanilla-extract/css'
import { vars } from 'common/themes/light.css'

export default {
    container: style({
        display: 'flex',
        alignItems: 'end',
        marginTop: vars.space.p16
    })
}