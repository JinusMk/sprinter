
import { Task } from "modules/Home/store/interface";
import useStore from 'modules/Home/store';
import { generateUUID } from 'lib/utils'

const useLogic = () => {
  const { tasks, workHours, daysInAWeek, sprintLength } = useStore(state => ({
    tasks: state.tasks,
    workHours: state.workHours,
    daysInAWeek: state.daysInAWeek, sprintLength: state.sprintLength,
  }));

  const selectedTasksTotalHours = tasks
    .filter((task) => task.active)
    .reduce((sum: number, task: Task) => {
      return Number(sum) + Number(task.duration);
    }, 0);

  const totalBandwidth = workHours * sprintLength 
  const daysNeeded = Math.ceil(selectedTasksTotalHours / workHours);
  const weekDaysGenerated = Array(daysNeeded).fill("day"); 
  const showAllocation = workHours > 0 && daysInAWeek > 0 && sprintLength > 0 && tasks?.length > 0 && weekDaysGenerated?.length > 0
  const bufferTime = totalBandwidth - selectedTasksTotalHours
  
  let weekCount = 0
  
  const weeksGenerated = weekDaysGenerated?.reduce((res, day, index) => {
    const showWeekSplit = (index) % daysInAWeek === 0
    if(showWeekSplit){
      weekCount += 1
    }
    return {
      ...res,
      [weekCount]: [...(res?.[weekCount] ?? []) , {day, id: generateUUID()}]
    }
  }, {})
  
  return {
    bufferTime,
    totalBandwidth,
    weeksGenerated,
    showAllocation
  }
};
export default useLogic;
