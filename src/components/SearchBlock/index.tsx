import { useState } from 'react'

import { RangeInput } from '../Input/RangeInput'
import { TextInput } from '../Input/TextInput'

export const SearchBlock = () => {
    const [inputValue, setInputValue] = useState('1,000,000')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const curStringValue = e.target.value.split(',').join('')
        const numValue = Number(curStringValue)

        setInputValue(curStringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        setErrorMessage('')

        if (isNaN(numValue)) setErrorMessage('Стоимость должна быть числовым значением')
        if (numValue > 10000000) setErrorMessage('Стоимость недвижимости не может превышать 10,000,000')
        if (numValue < 0) setErrorMessage('Стоимость недвижимости не может быть меньше 0')
        if (numValue === 0) setErrorMessage('Стоимость недвижимости не может быть равна 0')
        if (e.target.value === '') setErrorMessage('Поле обязательно для заполнения')
    }

    return (
        <div>
            <TextInput
                inputValue={inputValue}
                errorMessage={errorMessage}
                handleInputChange={handleInputChange}
            />
            <RangeInput
                min={0}
                max={inputValue}
                defaultValue={500000}
            />
        </div>
    )
}