import useStore from "../store";
import useSeriveStore from 'modules/Service/store'

const useLogic = () => {
    const {tasks, updateActiveField, clearAll, removeTask} = useStore(state => ({
        tasks: state.tasks,
        updateActiveField: state.updateActiveField,
        clearAll: state.clearAll,
        removeTask: state.removeTask
    }))
    const { toast } = useSeriveStore()

    const clearAllTasks = () => {
        toast('Tasks cleared successfully', {type: 'success'})
        clearAll()
    }
    const onChange = (id: string) => () => {
        updateActiveField(id)
    }
    const onRemoveTask = (id: string) => () => {
        toast('Task removed successfully', {
            type: 'success'
        })
        removeTask(id)
    }
    const isClearAllDisabled = tasks?.length === 0
    return {
        clearAll: clearAllTasks,
        tasks,
        onChange,
        onRemoveTask,
        isClearAllDisabled
    }
} 
export default useLogic