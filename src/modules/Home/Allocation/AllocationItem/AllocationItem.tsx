import {FC} from 'react'
import { AllocationItemProps } from "modules/Home/store/interface"

import { weekDays } from 'modules/Home/store/constants'
import useLogic from './AllocationItem.logic'
import { allocationItemStyles } from './styles.css'

const AllocationItem: FC<AllocationItemProps> = ({ index }) => {
    const { processDailyData, daysInAWeek, sprintLength } = useLogic()

    const picker: number = index % daysInAWeek
    const day = weekDays[Number(picker)] 
    const showWeekSplit = ((index + 1) % daysInAWeek) === 0
    const splitItemOverflow = (index + 1) >  sprintLength
    const dailyHours = processDailyData?.(index) || 0
    
    if (dailyHours <= 0) return null
    return <div className={allocationItemStyles({
        overflow: splitItemOverflow,
    })}>
        {day}:
        {dailyHours}h
        {showWeekSplit ? <><br /><br /></> : ''}
    </div>
}
export default AllocationItem