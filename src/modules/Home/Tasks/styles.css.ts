import { style } from '@vanilla-extract/css'
import { vars } from 'common/themes/light.css';

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto',
    padding: vars.space.p16
  }),
  header: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center'
  }),
  taskItem: style({
    display: 'flex',
    marginBottom: vars.space.p8
  })
}; 