import { FC } from 'react'
import { AllocationItemProps } from "modules/Home/store/interface"

import useLogic from './AllocationItem.logic'
import { allocationItemStyles } from './styles.css'
import Text from 'common/UI/Text'

const AllocationItem: FC<AllocationItemProps> = ({ dayIndex, weekIndex }) => {
    const { dailyHours, day, isOverflow } = useLogic({dayIndex, weekIndex})

    return <Text className={allocationItemStyles({
        overflow: isOverflow,
    })}>
        {day}: &nbsp;{dailyHours} hour(s)
    </Text>
}
export default AllocationItem