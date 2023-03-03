import useStore from '../store'
import {ToastInterface } from '../store/interface'
import ToastPresent from './ToastPresent'
import { FC } from 'react'

const Toast: FC<ToastInterface> = () => {
  const {toasts, toast} = useStore()
  window.globals = window.globals || {
    service: {}
  }
  window.globals.service.toast = toast

  return (
    <>
      {toasts?.length
        ? toasts?.map((toa) => <ToastPresent key={toa?.id} {...toa} />)
        : null}
    </>
  )
}
export default Toast
