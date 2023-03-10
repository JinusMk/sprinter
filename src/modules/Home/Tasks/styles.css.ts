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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vars.space.p24
  }),
  taskItem: style({
    display: 'flex',
    marginBottom: vars.space.p8
  }),
  title: style({
    display: 'flex',
    marginRight: vars.space.p16,
  })
}; 