export interface ServiceStore {
   toasts: Array<ToastInterface>,
   toast: (message: string, options?: ToastInterface) => void,
   hideToastById: (id: string) => void
}

export interface ToastInterface {
    id?: string,
    duration?: number,
    message?: string,
    persist?: boolean,
    timer?: any,
    type?: 'default' | 'success' | 'error' | undefined,
}
export interface ToastPresentInterface {
    message: string | undefined,
    type: 'default' | 'success' | 'error' | undefined,
}

declare global {
    interface Window {
      globals: any;
    }
}