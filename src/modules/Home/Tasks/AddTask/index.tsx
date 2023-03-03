import Button from 'common/UI/Button'
import Input from 'common/UI/Input'
import useLogic from './AddTask.logic'
import styles from './styles.css'

const AddTask = () => {
    const {onChange, onAddTask, taskName, taskDuration, isDisabled} = useLogic()
   
    return <div className={styles.container}>
        <Input label="Task Name" type="text" placeholder="task name" onChange={onChange('taskName')} value={taskName} />&nbsp;
        <Input label="Story points (hours)" type="number" placeholder="hours" onChange={onChange('taskDuration')} value={taskDuration ? taskDuration.toString() : ''} />&nbsp;
        <Button disabled={isDisabled} onClick={onAddTask}>Add New Task</Button>
    </div>
}

export default AddTask