import useStore from 'modules/Home/store';
import useServiceStore from 'modules/Service/store'

const useLogic = ()=> {
    const {taskName, taskDuration, updateField, addTask, workHours, daysInAWeek, sprintLength} = useStore(state => ({
      taskName: state.taskName, workHours: state.workHours, daysInAWeek: state.daysInAWeek, sprintLength: state.sprintLength, taskDuration: state.taskDuration, updateField: state.updateField, addTask: state.addTask
    }))
    const {toast} = useServiceStore()

    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField(field, e.target.value)
    }
    const onAddTask = (): void => {
      toast('Task added successfully', {type: 'success'})
      addTask()
    }
    const isDisabled = !(taskName?.trim() && taskDuration > 0 && workHours > 0 && daysInAWeek > 0 && sprintLength > 0)
  return {
    onChange,
    onAddTask,
    taskName,
    taskDuration,
    isDisabled
  }
};
export default useLogic;
