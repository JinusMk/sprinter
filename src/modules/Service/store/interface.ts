export interface ServiceStore {
   toasts: Array<ToastInterface>,
   toast: (message: string, options: ToastInterface) => void,
   hideToastById: (id: string) => void
}

export interface ToastInterface {
    id: string,
    duration?: number,
    message: string,
    persist?: boolean,
    timer?: any,
    type: 'default' | 'success' | 'error',
}
export interface ToastPresentInterface {
    message: string,
    type: 'default' | 'success' | 'error',
}

declare global {
    interface Window {
      globals: any;
    }
}