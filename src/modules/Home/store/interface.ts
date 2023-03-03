export interface HomeStore {
    tasks: Array<Task>,
    [field: string]: any,
    taskName: string,
    taskDuration: number,
    sprintLength: number,
    workHours: number,
    daysInAWeek: number,
    addTask: () => void,
    updateField: (field: string, value: string | number) => void
    updateActiveField: (id: string) => void,
    clearAll: () => void
}

export interface Task{
    id: string,
    name: string,
    duration: number,
    active: boolean
}

export interface Storage {
    getItem: (name: string) => string | null | Promise<string | null>
    setItem: (name: string, value: string) => void | Promise<void>
    removeItem: (name: string) => void | Promise<void>
  }

export interface Allocation {
    totalHours?: number,
    weekDaysGenerated?: Array<string>,
    showAllocation: boolean
}
export interface AllocationItem {
    daysInAWeek: number,
    processDailyData?: (day: number) => number,
    sprintLength: number,
}

export interface AllocationItemProps {
    index: number
}

export interface Settings {
    daysInAWeek: number,
    workHours: number,
    sprintLength: number,
    onChange: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TasksLogic {
    clearAll: () => void,
    onChange: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void,
    tasks: Array<Task>,
}

export interface AddTask {
    onAddTask: () => void,
    taskName: string,
    taskDuration: number,
    isDisabled: boolean,
    onChange: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void,
}