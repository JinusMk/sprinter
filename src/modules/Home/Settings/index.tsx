import Input from "common/UI/Input"
import Text from "common/UI/Text"
import useLogic from "./Settings.logic"
import styles from './styles.css'

export const Settings = () => {
    const { daysInAWeek, workHours, sprintLength, onChange } = useLogic()
   
    return <div className={styles.container}>
        <div className={styles.title}>
            <Text fontSize={'xlg'} fontWeight='bold'>Sprint Configuration</Text>
        </div>
        <div className={styles.inputGroup}>
            <Input className={styles.inputWrapper} label="Work hours in a day (hours)" type="number" placeholder="hours" onChange={onChange('workHours')} value={workHours} />
            <Input className={styles.inputWrapper} label="Work days in a week (days)" type="number" placeholder="days" onChange={onChange('daysInAWeek')} value={daysInAWeek} />
            <Input className={styles.inputWrapper} label="Sprint duration (days)" type="number" placeholder="days" onChange={onChange('sprintLength')} value={sprintLength} />
        </div>
    </div>
}