import { style } from '@vanilla-extract/css'
import { vars } from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    padding: vars.space.p16,
    minWidth: '50%',
    '@media': {
      'screen and (max-width: 767px)': {
        minWidth: '100%',
      },
    },
  }),
  title: style({
    marginBottom: vars.space.p16,
  }),
  inputGroup: style({
    display: 'flex',
    flexWrap: 'wrap',
    '@media': {
      'screen and (max-width: 767px)': {
        flexDirection: 'column',
      },
    },
  }),
  inputWrapper: style({
    marginRight: vars.space.p12,
    ':last-child': {
      marginRight: 0
    },
    '@media': {
      'screen and (max-width: 767px)': {
        marginRight: 0,
        marginBottom: vars.space.p8,
        flex: 1
      },
    }
  }),
}; 