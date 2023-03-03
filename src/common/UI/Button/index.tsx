import styles from './styles.css'
import { FC, ReactNode} from 'react'

export interface ButtonProps {
    disabled?: boolean,
    className?: string,
    children?: ReactNode,
    onClick: () => void
}

const Button: FC <ButtonProps>  = ({children, onClick, disabled}) => 
<button className={styles.container} disabled={disabled} onClick={onClick}>{children}</button>

export default Button