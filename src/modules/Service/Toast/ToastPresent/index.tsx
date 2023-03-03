
import { FC } from 'react'



import { Toast } from 'modules/Service/store/interface'
import styles, { toastStyles } from './ToastPresent.css'
import Text from 'common/UI/Text'

const ToastPresent: FC<Toast> = ({type, message}) => {
  return  <div className={toastStyles({
    [type]: type
  })} data-testid="toast" role="presentation"
>
  <div className={styles.toastContentWrapper}>
    <Text
      className={styles.body}
    >
      {message}
    </Text>
  </div>
</div>
}

export default ToastPresent