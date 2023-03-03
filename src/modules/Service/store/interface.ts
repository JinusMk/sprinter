export interface ServiceStore {
   toasts: Array<ToastInterface>,
   toast: (message: string, options: ToastInterface) => void,
   hideToastById: (id: string) => void
}

export interface ToastInterface {
    id: string,
    duration?: number,
    message?: string,
    persist?: boolean,
    timer?: any,
    type: string,
}

declare global {
    interface Window {
      globals: any;
    }
}