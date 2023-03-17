import create from 'zustand'
import { ServiceStore, ToastInterface } from './interface'
import { devtools } from 'zustand/middleware'
import { generateUUID } from 'lib/utils'

const useStore = create<ServiceStore>(devtools((((set, get) => ({
    toasts: [],
    toast: (message: string, options : Partial<ToastInterface> = {}): void => {
        if (!message) {
            return
        }
        const id = options?.id || generateUUID()
        
        const hideToast = () => {
            set(state => ({toasts: state.toasts.filter(toa => toa.id !== id)}))
        }
        if (options.duration) {
            options.duration = options.duration * 1000
        } else {
            options.duration = 3000
        }
        const toastPayload = { ...options, id, message }
        const newToast = { ...toastPayload, onClose: hideToast }
        const toasts = get()?.toasts
        const existing = toasts.findIndex(({ id: _id }) => _id === id)
        if (!options.persist) {
            // removed existing toast timer based on id
            if (existing !== -1 && toasts?.[existing]?.timer) {
                window.clearTimeout(toasts?.[existing]?.timer)
            }
            newToast.timer = setTimeout(() => {
                hideToast()
            }, options?.duration) 
        }
        let updatedToast: Array<ToastInterface> = []
        if (existing !== -1) {
            toasts[existing] = newToast
            updatedToast = [...toasts.map((t) => t)]
        } else {
            updatedToast = [...toasts.map((t) => t), newToast]
        }
        set(() => ({
            toasts: updatedToast,
        }))
    },
    hideToastById:  (id) => set((state) => ({
        toasts: state?.toasts?.filter(({ id: _id }) => _id !== id)
    }))
}))), {name: 'SPRINTER-service-store'}))

export default useStore