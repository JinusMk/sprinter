import useStore from "modules/Home/store"
import { Task } from "modules/Home/store/interface"
import { useMemo } from "react"

const useLogic = () => {
    const { tasks, workHours,daysInAWeek, sprintLength  } = useStore(state => ({tasks: state.tasks, workHours: state.workHours, daysInAWeek: state.daysInAWeek, sprintLength: state.sprintLength}))
    const totalBandwidth = workHours * sprintLength

    const total = useMemo(() => tasks?.reduce((res, task: Task) => {
        if(task?.active){
        //calculate only the active tasks length and required hours
            return {
                ...res,
                tasks: Number(res.tasks + 1),
                hours: Number(res?.hours) + Number(task?.duration)
            }
        }
        return res
    }, {tasks: 0, hours: 0}), [tasks, workHours,daysInAWeek, sprintLength])

    return {
        total: {
            ...total,
            bandwidth: totalBandwidth
        }
    }
}
export default useLogic