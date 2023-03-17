import Button from 'common/UI/Button'
import Input from 'common/UI/Input'
import useLogic from './logic'
import styles from './styles.css'

const AddTask = () => {
    const {onChange, onAddTask, taskName, taskDuration, isDisabled} = useLogic()
    return <div className={styles.wrapper}>
         <Input className={styles.inputWrapper} label="Task Name" type="text" placeholder="Add task name" onChange={onChange('taskName')} value={taskName} />
            <Input className={styles.inputWrapper} label="Story points (hours)" type="number" placeholder="Add hours" onChange={onChange('taskDuration')} value={taskDuration ? taskDuration.toString() : ''} />
            <Button disabled={isDisabled} className={styles.button} onClick={onAddTask}>Add</Button>
    </div>
}

export default AddTask