import { ChangeEvent, FC } from 'react'
import styles from './styles.css'

export interface CheckBoxProps {
    label?: string,
    isChecked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: FC <CheckBoxProps> = ({label, isChecked, onChange}) => <div className={styles.base}>
    <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" onChange={onChange} checked={isChecked}/>
        {label}
    </label>
</div>

export default CheckBox