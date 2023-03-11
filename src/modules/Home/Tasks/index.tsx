import Button from "common/UI/Button"
import CheckBox from "common/UI/CheckBox"
import Text from "common/UI/Text"
import AddTask from "./AddTask"
import styles, { taskDurationStyles } from './styles.css'
import Summary from "./Summary"
import useLogic from "./Tasks.logic"

const Tasks = () =>     {
    const {clearAll, tasks, onChange, onRemoveTask} = useLogic()

    const tasksList = tasks?.map(({id, name, duration, active}) => (<div key={id} className={styles.taskItem}>
            <CheckBox onChange={onChange(id)} isChecked={active} label={<div className={styles.taskDetails}>
                <Text fontWeight="medium" fontSize="md" className={styles.taskName}>{name}</Text>
                <Text fontSize="base" className={taskDurationStyles({
                    active: active
                })}>{`(${duration} hours)`}</Text></div>} />
            <Text fontSize="base" fontWeight="medium" className={styles.closeIcon} onClick={onRemoveTask(id)}>X</Text>
        </div>))
    
    return <div className={styles.container}>
        <div className={styles.header}>
            <Text className={styles.title} fontWeight='bold' fontSize={'xlg'}>All Tasks</Text>
            <Button type="secondary" onClick={clearAll}>Clear All</Button>
        </div>
        {tasksList}
        <Summary/>
        <AddTask />
    </div>
}

export default Tasks