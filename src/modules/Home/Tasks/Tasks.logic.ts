import useStore from "../store";

const useLogic = () => {
    const {tasks, updateActiveField, clearAll, removeTask} = useStore(state => ({
        tasks: state.tasks,
        updateActiveField: state.updateActiveField,
        clearAll: state.clearAll,
        removeTask: state.removeTask
    }))
    
    const onChange = (id: string) => () => {
        updateActiveField(id)
    }
    const onRemoveTask = (id: string) => () => {
        removeTask(id)
    }
    return {
        clearAll,
        tasks,
        onChange,
        onRemoveTask
    }
} 
export default useLogic