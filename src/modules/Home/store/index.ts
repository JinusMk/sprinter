import create from 'zustand'
import { HomeStore } from './interface'
import { persist } from "zustand/middleware"



const useStore = create(persist<HomeStore>(((set) => ({
    taskName: '',
    taskDuration: 0,
    tasks: [],
    sprintLength: 10,
    workHours: 8,
    daysInAWeek: 5,
    addTask: () => set((state) => ({ 
        tasks: [...state.tasks, {
            id: Date.now().toString(),
            name: state.taskName,
            duration: state.taskDuration,
            active: true
        }],
        taskName: ``,
        taskDuration: 0,
    })),
    updateField: (field, value) => set(() => ({
        [field]: value.toString()
    })),
    updateActiveField: (taskId) => set((state) => ({
        tasks: state?.tasks?.map((task) => {
            if(task.id === taskId) {
                task.active = !task.active
            }
            return task
        })
    })),
    clearAll: () => set({
        tasks: [],
        taskName: '',
        taskDuration: 0
    })
})), {name: 'sprinter-home'}))

export default useStore