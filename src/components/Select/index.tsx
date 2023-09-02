import React, { useState } from 'react'

import { ISelect } from './interface'

export const Select = ({ children, placeholder, label }: ISelect) => {
    const [selectValue, setSelectValue] = useState('')

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value)
    }

    return (
        <label>
            <div>{label}</div>
            <select
                value={selectValue}
                onChange={handleSelectChange}
            >
                <option value='' disabled hidden>
                    {placeholder}
                </option>
                {children}
            </select>
        </label>
    )
}