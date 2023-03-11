import { buttonStyles } from './styles.css'
import { FC, ReactNode} from 'react'

export interface ButtonProps {
    disabled?: boolean,
    className?: string,
    children?: ReactNode,
    type?: 'primary' | 'secondary',
    onClick: () => void
}

const Button: FC <ButtonProps>  = ({children, onClick, disabled = false, type = 'primary', className}) => 
<button className={`${buttonStyles({
    buttonType: type,
    disabled: disabled
})} ${className}`} disabled={disabled} onClick={onClick}>{children}</button>

export default Button