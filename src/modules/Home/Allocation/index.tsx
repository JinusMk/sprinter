import { FC } from 'react'
import useLogic from './Allocation.logic'
import styles, { bufferTimeStyles } from './styles.css'

import AllocationItem from './AllocationItem'
import Text from 'common/UI/Text'

const Allocation:FC = () => {
    const { bufferTime, totalBandwidth, weeksGenerated, showAllocation } = useLogic()

    const detailsSummary = <div className={styles.detailsWrapper}>
        <Text fontSize='base' className={styles.heading}>
            Bandwidth: &nbsp;<Text fontWeight='semiBold' fontSize='md'>{totalBandwidth}</Text>&nbsp;hour(s)
        </Text>
        <Text className={styles.heading}>
            Reserve time: &nbsp;<Text fontWeight='semiBold' fontSize='md' className={bufferTimeStyles({
                type: bufferTime < 0 ? 'danger' : 'success'
        })}>{bufferTime}</Text> &nbsp;hour(s)
        </Text>
    </div>

    return <div className={styles.container}>
            <Text fontSize='xlg' className={styles.title} fontWeight='bold'>Serial sprint plan for you</Text>
            {detailsSummary}
            {showAllocation && <div className={styles.allocationWrapper}>
                {Object.keys(weeksGenerated)?.map((key: string, wIndex) => 
                    (<div className={styles.weekWrapper} key={key}>
                        <Text className={styles.weekTitle} fontSize='md' fontWeight='medium'>Week {key}</Text>
                        {weeksGenerated?.[key]?.map((day: any, index: number) => <AllocationItem key={day?.id} weekIndex={wIndex} dayIndex={index}/>)}
                    </div>)
                )}
            </div>}
    </div>
}

export default Allocation