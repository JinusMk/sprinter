import { style } from '@vanilla-extract/css'
import themes, { vars } from 'common/themes/light.css'

export default {
    wrapper: style({
        display: 'flex',
        marginTop: vars.space.p12,
        padding: vars.space.p16,
        background: themes.color.colorWhite,
        borderRadius: vars.radius.base,
        boxShadow: vars.shadow.spread
    }),
    inputWrapper: style({
        display: 'flex',
        flex: '1',
        marginRight: vars.space.p12,
        ':last-child': {
            marginRight: 0
        }
    }),
    button: style({
        display: 'flex',
        alignSelf: 'flex-end'
    })
}