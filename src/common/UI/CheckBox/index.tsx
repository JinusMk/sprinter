import { ChangeEvent, FC, ReactNode } from 'react'
import styles, {checkboxStyles} from './styles.css'

export interface CheckBoxProps {
    label?: string | ReactNode,
    isChecked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: FC <CheckBoxProps> = ({label, isChecked, onChange}) => {
    return <div className={styles.base}>
    <label className={styles.label}>
        <input className={checkboxStyles} type="checkbox" onChange={onChange} checked={isChecked}/>
        {label}
    </label>
</div>}

export default CheckBox