import './applicationBody.scss'

export const ApplicationBody = ({children}) => {
    return (
        <>
            <div className="applicationBody">
                <div className='secBorder'>
                    {children}
                </div>
            </div>
        </>
    )
}