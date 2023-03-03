import styles from './styles.css'
import {FC, ReactNode} from 'react'

export interface TextProps {
    fontWeight?: number,
    fontSize?: number,
    ellipsis?: boolean,
    className?: string,
    as?: any, 
    children?: ReactNode,
}


const Text: FC <TextProps> = ({fontWeight, fontSize, ellipsis, className,as: Component = 'span', children,  ...rest}) => {

return <Component {...rest}>
    {children}
</Component>
}

export default Text