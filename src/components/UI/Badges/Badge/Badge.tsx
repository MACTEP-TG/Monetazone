import './badge.scss'

export const Badge = ({children, ...otherProps}) => {
    return (
        <>
            <p {...otherProps} className='badge pointer'>{children}</p>
        </>
    )
}