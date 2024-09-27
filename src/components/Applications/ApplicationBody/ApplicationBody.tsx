import './applicationBody.scss'

export const ApplicationBody = ({children}) => {
    return (
        <>
            <div
                onClick={(e) => e.stopPropagation()}
                data-aos-duration="1000" data-aos='zoom-in'
                className="applicationBody">
                <div className='secBorder'>
                    {children}
                </div>
            </div>
        </>
    )
}