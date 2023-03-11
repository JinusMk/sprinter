import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes';
import theme, { vars } from 'common/themes/light.css';

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: vars.space.p16,
  }),
  detailsWrapper: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: vars.space.p2,
    padding: vars.space.p12,
    borderRadius: vars.radius.base,
    background: theme.color.colorWhite,
    boxShadow: vars.shadow.card,
    marginBottom: vars.space.p24
  }),
  title: style({
    marginBottom: vars.space.p24
  }),
  weekTitle: style({
    marginBottom: vars.space.p12
  }),
  allocationWrapper: style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 'calc(12px * -1)'
  }),
  weekWrapper: style({
    background: theme.color.colorWhite,
    padding: vars.space.p16,
    boxShadow: vars.shadow.card,
    marginRight: vars.space.p12,
    marginBottom: vars.space.p12,
    borderRadius: vars.radius.base,
    flex: '1 0 auto',
  }),
  heading: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  })
}; 

export const bufferTimeStyles = recipe({
  base: {

  }, 
  variants: {
    type: {
      danger: {
        color: theme.color.danger
      },
      success: {
        color: theme.color.colorPrimaryGreen
      },
    }
  }
})