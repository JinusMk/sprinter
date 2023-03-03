import {  AddTask } from "modules/Home/store/interface";
import useStore from 'modules/Home/store';

const useLogic = (): AddTask => {
    const {taskName, taskDuration, updateField, addTask, workHours, daysInAWeek, sprintLength} = useStore(state => ({
      taskName: state.taskName, workHours: state.workHours, daysInAWeek: state.daysInAWeek, sprintLength: state.sprintLength, taskDuration: state.taskDuration, updateField: state.updateField, addTask: state.addTask
    }))

    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField(field, e.target.value)
    }
    const onAddTask = () => {
        window.console.log('add')
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