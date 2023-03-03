import styles from './styles.css'

const Input = ({label, placeholder, ...rest} : any) => <div className={styles.container}>
    {label && <label className={styles.label}>{label}</label>}
    <input className={styles.input} placeholder={placeholder || label} {...rest} />
</div>

export default Input