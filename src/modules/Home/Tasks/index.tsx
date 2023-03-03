import Button from "common/UI/Button"
import AddTask from "./AddTask"
import styles from './styles.css'
import useLogic from "./Tasks.logic"

const Tasks = () =>     {
    const {clearAll, tasks, onChange} = useLogic()

    return <div className={styles.container}>
        <div className={styles.header}><h1>All Tasks</h1>&nbsp;&nbsp;
        <Button onClick={clearAll}>Clear All</Button>
        </div>
        {tasks?.map(({id, name, duration, active}) => {
            return <div key={id} className={styles.taskItem}>
                <input type="checkbox" onChange={onChange(id)} checked={active}></input>
                {name}({duration} hours)
            </div>
        })}
        <AddTask />
    </div>
}

export default Tasks