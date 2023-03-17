
import { FC } from 'react'

import { ToastPresentInterface } from 'modules/Service/store/interface'
import styles, { toastStyles } from './styles.css'
import Text from 'common/UI/Text'

const ToastPresent: FC<ToastPresentInterface> = ({type = 'default', message}) => {
  return  <div className={toastStyles({
    toastType:  type
  })} data-testid="toast" role="presentation"
>
  <div className={styles.toastContentWrapper}>
    <Text
      className={styles.message}
    >
      {message}
    </Text>
  </div>
</div>
}

export default ToastPresent