import useStore from '../store'
import ToastPresent from './ToastPresent'
import { FC } from 'react'
import styles from './styles.css'

const Toast: FC= () => {
  const { toasts } = useStore(({toasts, toast}) => ({toasts, toast}))

  return (
    <div className={styles.wrapper}>
      {toasts?.length
        ? toasts?.map((toa) => <ToastPresent type={toa?.type} key={toa?.id} message={toa?.message} />)
        : null}
    </div>
  )
}
export default Toast
