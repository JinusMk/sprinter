import useStore from "../store";
import { Settings } from "../store/interface";

const useLogic = (): Settings => {
    const { workHours, sprintLength, daysInAWeek, updateField } = useStore(state => ({
            workHours: state.workHours,
            sprintLength: state.sprintLength,
            daysInAWeek: state.daysInAWeek,
            updateField: state.updateField
    }));
    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField(field, e.target.value)
    }
    return {
        daysInAWeek,
        workHours,
        sprintLength,
        onChange,
    }
} 
export default useLogic