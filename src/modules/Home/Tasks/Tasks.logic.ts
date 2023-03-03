import useStore from "../store";
import { TasksLogic } from "../store/interface";

const useLogic = (): TasksLogic => {
    const {tasks, updateActiveField, clearAll} = useStore(state => ({
        tasks: state.tasks,
        updateActiveField: state.updateActiveField,
        clearAll: state.clearAll
    }))
    const onChange = (id: string) => () => {
        updateActiveField(id)
    }
    return {
        clearAll,
        tasks,
        onChange
    }
} 
export default useLogic