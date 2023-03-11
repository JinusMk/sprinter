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
    removeTask: (id: string) => void,
    clearAll: () => void
}

export interface Task{
    id: string,
    name: string,
    duration: number,
    active: boolean
}
export interface AllocationItemProps {
    dayIndex: number,
    weekIndex: number,
}
export interface Settings {
    daysInAWeek: number,
    workHours: number,
    sprintLength: number,
    onChange: (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => void
}