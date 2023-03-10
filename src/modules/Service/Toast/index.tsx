import useStore from '../store'
import ToastPresent from './ToastPresent'
import { FC } from 'react'

const Toast: FC= () => {
  const {toasts, toast} = useStore(state => ({toasts: state.toasts, toast: state.toast}))

  window.globals = window.globals || {
    service: {}
  }
  window.globals.service.toast = toast

  return (
    <>
      {toasts?.length
        ? toasts?.map((toa) => <ToastPresent type={toa?.type} key={toa?.id} message={toa?.message} />)
        : null}
    </>
  )
}
export default Toast
