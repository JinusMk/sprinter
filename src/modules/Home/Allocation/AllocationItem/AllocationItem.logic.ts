import { Task, AllocationItem } from "modules/Home/store/interface";
import useStore from 'modules/Home/store';

const useLogic = (): AllocationItem => {
  const { tasks, workHours, sprintLength, daysInAWeek } = useStore(state => ({
    tasks: state.tasks, workHours: state.workHours, sprintLength: state.sprintLength, daysInAWeek: state.daysInAWeek
  }))

  const totalHours = tasks
    .filter((task) => task.active)
    .reduce((sum: number, task: Task) => {
      return Number(sum) + Number(task.duration);
    }, 0);
  const daysNeeded = Math.ceil(totalHours / workHours);
  

  const processDailyData = (day : number) => {
    const remaining = totalHours - (workHours * day);
    if (remaining >= workHours) {
      return workHours;
    }
    const hours = remaining % workHours;
    if (hours > 0) {
      return hours;
    }
    return 0;
  };

  return {
    daysInAWeek,
    processDailyData,
    sprintLength,
  };
};
export default useLogic;
