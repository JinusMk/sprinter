import { style } from '@vanilla-extract/css'
import theme, {vars} from 'common/themes/light.css'

export default {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: theme.color.background,
    color: theme.color.primaryText,
    overflow: 'auto',
  }),
  sectionTitle: style({
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    height: '100%',
    backgroundColor: theme.color.background,
    color: theme.color.primaryText,
    overflow: 'auto',
  }),
  row: style({
    display: 'flex',
    flexDirection: 'row'
  })
}; 