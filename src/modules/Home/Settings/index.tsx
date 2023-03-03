import Button from "common/UI/Button"
import Input from "common/UI/Input"
import Text from "common/UI/Text"
import useLogic from "./Settings.logic"
import styles from './styles.css'

export const Settings = () => {
    const { daysInAWeek, workHours, sprintLength, onChange } = useLogic()
   
    return <div className={styles.container}>
        <div className={styles.title}>
            <Text>Sprint Configuration</Text>
        </div>
        <div className={styles.inputGroup}>
            <Input label="Work Hours (hours)" type="number" placeholder="hours" onChange={onChange('workHours')} value={workHours} />&nbsp;
            <Input label="Work Days(days)" type="number" placeholder="days" onChange={onChange('daysInAWeek')} value={daysInAWeek} />&nbsp;
            <Input label="Sprint Duration(days)" type="number" placeholder="days" onChange={onChange('sprintLength')} value={sprintLength} />&nbsp;
        </div>
    </div>
}