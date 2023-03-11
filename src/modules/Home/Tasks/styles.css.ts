import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes';
import theme, { vars } from 'common/themes/light.css';

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
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
    flex: 1,
    marginBottom: vars.space.p12,
    padding: vars.space.p12,
    background: theme.color.colorWhite,
    borderRadius: vars.radius.base,
    boxShadow: vars.shadow.card,
    alignItems: 'center',
  }),
  title: style({
    display: 'flex',
    marginRight: vars.space.p16,
  }),
  taskDetails: style({
    display: 'flex',
    alignItems: 'center',
    marginRight: vars.space.p16,
  }),
  taskName: style({
    display: 'flex',
    flex: 1,
    marginRight: vars.space.p8,
  }),
  closeIcon: style({
    display: 'flex',
    cursor: 'pointer',
    color: theme.color.colorSecondary
  })
}; 

export const taskDurationStyles = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    active: {
      true: {
        color: theme.color.colorSecondary
      },
      false: {
        color: theme.color.colorSecondary
      },
    }
  }
})