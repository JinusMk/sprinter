import { Task, Allocation } from "modules/Home/store/interface";
import useStore from 'modules/Home/store';

const useLogic = (): Allocation => {
  const { tasks, workHours, daysInAWeek, sprintLength } = useStore(state => ({
    tasks: state.tasks,
    workHours: state.workHours,
    daysInAWeek: state.daysInAWeek, sprintLength: state.sprintLength,
  }));

  const totalHours = tasks
    .filter((task) => task.active)
    .reduce((sum: number, task: Task) => {
      return Number(sum) + Number(task.duration);
    }, 0);
  const daysNeeded = Math.ceil(totalHours / workHours);
  const weekDaysGenerated = Array(daysNeeded + 2).fill("day"); 
  const showAllocation = workHours > 0 && daysInAWeek > 0 && sprintLength > 0 && tasks?.length > 0 && weekDaysGenerated?.length > 0
  return {
    totalHours,
    weekDaysGenerated,
    showAllocation
  }
};
export default useLogic;
