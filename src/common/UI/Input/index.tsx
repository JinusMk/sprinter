import { ChangeEvent, FC } from 'react'
import styles from './styles.css'

export interface InputProps {
    label?: string,
    className?: string,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type: string,
    value: string | number
}

const Input: FC <InputProps> = ({label, placeholder, onChange, type, value, className}) => <div className={`${styles.container} ${className}`}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={styles.input} placeholder={placeholder || label} value={value} type={type} onChange={onChange}/>
</div>

export default Input