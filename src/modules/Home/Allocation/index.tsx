import { FC } from 'react'
import useLogic from './Allocation.logic'
import styles from './styles.css'

import AllocationItem from './AllocationItem/AllocationItem'
import Text from 'common/UI/Text'

const Allocation:FC = () => {
    const { totalHours, weekDaysGenerated, showAllocation } = useLogic()

    return <div className={styles.container}>
            <Text fontSize='xlg' className={styles.title} fontWeight='bold'>Serial sprint plan for you </Text>
            <Text fontSize='base'>Total: {totalHours} hours</Text>
            {showAllocation && weekDaysGenerated?.map((_, index: number) => <AllocationItem key={_} index={index}/>)}
    </div>
}

export default Allocation