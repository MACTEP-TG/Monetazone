import {FC} from "react";

type noLabelInputType = {
    value: string
    setValue: any
    type?: string
    placeholder?: string
}

export const NoLabelInput: FC<noLabelInputType> = ({type = 'text', placeholder, children, value, setValue}) => {
    return (
        <div className='noLabelInput input'>

            <input value={value}
                   onChange={(e) => setValue(e.target.value)}
                   type={type}
                   placeholder={placeholder}
            />

            <div className="children">
                {children}
            </div>

        </div>
    )
}