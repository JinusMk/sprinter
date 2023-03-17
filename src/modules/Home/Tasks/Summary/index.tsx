
import Text from 'common/UI/Text'
import useLogic from './logic'
import styles, { summaryTextStyles } from './styles.css'

const Summary = () => {
    const { total } = useLogic()
    return <div className={styles.wrapper}>
            <Text className={styles.tasks} fontSize='md' fontWeight='semiBold'>
                {total?.tasks}
                <Text className={styles.label}>Task(s) selected</Text>
            </Text>
            <Text className={summaryTextStyles({
                type: total?.hours > total?.bandwidth ? 'danger': 'success'
            })} fontSize='md' fontWeight='semiBold'>
                {total?.hours} 
                <Text className={styles.label}>hour(s)</Text>
            </Text>
    </div>
}

export default Summary