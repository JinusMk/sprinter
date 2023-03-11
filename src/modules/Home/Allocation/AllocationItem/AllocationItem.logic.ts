import { Task, AllocationItemProps } from "modules/Home/store/interface";
import useStore from 'modules/Home/store';
import { weekDays } from "modules/Home/store/constants";

const useLogic = ({weekIndex, dayIndex}: AllocationItemProps) => {
  const { tasks, workHours, sprintLength, daysInAWeek } = useStore(state => ({
    tasks: state.tasks, workHours: state.workHours, sprintLength: state.sprintLength, daysInAWeek: state.daysInAWeek
  }))

  const totalHours = tasks
    .filter((task) => task.active)
    .reduce((sum: number, task: Task) => {
      return Number(sum) + Number(task.duration);
    }, 0);

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

  const isOverflow = (weekIndex * daysInAWeek) + (dayIndex + 1) >  sprintLength
  const totalDays = (weekIndex * daysInAWeek) + dayIndex
  const dailyHours = processDailyData?.(totalDays) || 0
  const day = weekDays[Number(dayIndex)] 

  return {
    dailyHours,
    day, 
    isOverflow
  };
};
export default useLogic;
