import { style } from '@vanilla-extract/css'
import themes, { vars } from 'common/themes/light.css'

export default {
    wrapper: style({
        display: 'flex',
        marginTop: vars.space.p12,
        padding: vars.space.p16,
        background: themes.color.colorWhite,
        borderRadius: vars.radius.base,
        boxShadow: vars.shadow.spread,
        '@media': {
            'screen and (max-width: 767px)': {
              flexDirection: 'column'
            },
          }
    }),
    inputWrapper: style({
        display: 'flex',
        flex: '1',
        marginRight: vars.space.p12,
        ':last-child': {
            marginRight: 0
        },
        '@media': {
            'screen and (max-width: 767px)': {
                marginRight: 0,
                marginBottom: vars.space.p12,
                ':last-child': {
                    marginBottom: 0
                }
            },
          }
    }),
    button: style({
        display: 'flex',
        alignSelf: 'flex-end',
        '@media': {
            'screen and (max-width: 767px)': {
                marginTop: vars.space.p8,
                width: '100%'
            },
          }
    })
}