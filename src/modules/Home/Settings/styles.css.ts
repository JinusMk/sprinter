import { style } from '@vanilla-extract/css'
import theme, { vars } from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.background,
    padding: vars.space.p16,
  }),
  title: style({
    marginBottom: vars.space.p16
  }),
  inputGroup: style({
    display: 'flex',
  })
}; 