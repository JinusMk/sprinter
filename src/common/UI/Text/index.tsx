import {FC, ReactNode} from 'react'
import { textStyles } from './styles.css'

export interface TextProps {
    fontWeight?: 'regular' | 'medium' | 'semiBold' | 'bold',
    fontSize?: 'sm' | 'base' | 'md' | 'lg' | 'xlg',
    ellipsis?: boolean,
    className?: string,
    as?: any, 
    children?: ReactNode,
    onClick?: () => void
}


const Text: FC <TextProps> = ({fontWeight = 'regular', fontSize = 'base', ellipsis, className,as: Component = 'span', children,  ...rest}) => {

return <Component className={`${className} ${textStyles({
    fontSize: fontSize,
    fontWeight: fontWeight
})}`} {...rest}>
    {children}
</Component>
}

export default Text