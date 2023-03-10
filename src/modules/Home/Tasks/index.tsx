import { vars } from "common/themes/light.css"
import Button from "common/UI/Button"
import CheckBox from "common/UI/CheckBox"
import Text from "common/UI/Text"
import AddTask from "./AddTask"
import styles from './styles.css'
import useLogic from "./Tasks.logic"

const Tasks = () =>     {
    const {clearAll, tasks, onChange} = useLogic()

    return <div className={styles.container}>
        <div className={styles.header}><Text className={styles.title} fontWeight='bold' fontSize={'xlg'}>All Tasks</Text>
        <Button type="secondary" onClick={clearAll}>Clear All</Button>
        </div>
        {tasks?.map(({id, name, duration, active}) => {
            return <div key={id} className={styles.taskItem}>
                <CheckBox onChange={onChange(id)} isChecked={active} label={`${name}${`(${duration} hours)`}`}/>
            </div>
        })}
        <AddTask />
    </div>
}

export default Tasks