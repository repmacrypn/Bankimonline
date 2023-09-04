import { useEffect, useState } from 'react'

import { IRangeInput } from './interface'

export const RangeInput = ({ min, max, defaultValue }: IRangeInput) => {
    const [numValue, setNumValue] = useState(defaultValue)
    const [errorMessage, setErrorMessage] = useState('')

    const maxValue = Number(max.split(',').join(''))

    const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumValue(Number(e.target.value))
    }

    useEffect(() => {
        setErrorMessage('')

        if (numValue < maxValue * 0.25) setErrorMessage('Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости')
        if (isNaN(maxValue)) setErrorMessage('Обновите значение стоимости недвижимости')
    }, [numValue, maxValue])

    return (
        <div>
            <div>
                {numValue}
            </div>
            <input
                type="range"
                min={min}
                max={maxValue || 0}
                step={Math.ceil(numValue / 10000)}
                value={numValue}
                onChange={handleNumChange}
            />
            <div>
                {errorMessage}
            </div>
        </div>
    )
}