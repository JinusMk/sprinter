import create from 'zustand'
import { HomeStore } from './interface'
import { devtools } from "zustand/middleware"
import { generateUUID } from 'lib/utils'

const useStore = create<HomeStore>(devtools(((set) => ({
    taskName: "My task three",
    taskDuration: 8,
    tasks: [
        {
            id: generateUUID(),
            name: 'My task one',
            duration: 12,
            active: true
        },
        {
            id: generateUUID(),
            name: 'My task two',
            duration: 16,
            active: true
        },
    ],
    sprintLength: 10,
    workHours: 8,
    daysInAWeek: 5,
    addTask: () => set((state) => ({ 
        tasks: [...state.tasks, {
            id: generateUUID(),
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
    removeTask: (taskId) => set((state) => ({
        tasks: state?.tasks?.filter((task) => (task.id !== taskId))
    })),
    clearAll: () => set({
        tasks: [],
        taskName: '',
        taskDuration: 0
    })
})), {name: 'SPRINTER-home-store'}))

export default useStore