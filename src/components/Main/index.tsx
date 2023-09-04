import { doYouOwnProperty } from 'src/constants/doYouOwnProp'
import { propertyType } from 'src/constants/propertyType'
import { whenToBuyProperty } from 'src/constants/whenToBuy'
import { Select } from '../Select'
import { CustomSelectSearch } from '../Select/CustomSelectSearch'
import { SearchBlock } from '../SearchBlock'
import { monthPayment, mortgageDeadline } from 'src/constants/searchValues'
import { ReactNode, useState } from 'react'

export const Main = () => {
    return (
        <main>
            <SearchBlock />
            <CustomSelectSearch />
            <Select
                placeholder='Выберите период'
                label='Когда вы планируете оформить ипотеку?'
            >
                {whenToBuyProperty.map(p => <option key={p.id}>{p.when}</option>)}
            </Select>
            <Select
                placeholder='Выберите тип недвижимости'
                label='Тип недвижимости'
            >
                {propertyType.map(p => <option key={p.id}>{p.type}</option>)}
            </Select>
            <Select
                placeholder='Выберите ответ'
                label='Вы уже владеете недвижимостью?'
            >
                {doYouOwnProperty.map(p => <option key={p.id}>{p.property}</option>)}
            </Select>
        </main>
    )
}

export const CustomRange = () => {
    const [range, setRange] = useState(30)

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange(Number(e.target.value))
    }

    return (
        <div>
            <CustomRangeInput
                min={mortgageDeadline.from}
                max={mortgageDeadline.to}
                range={range}
                handleRangeChange={handleRangeChange}
                step={1}
            >
                <div>qq</div>
            </CustomRangeInput>
            <CustomRangeInput
                min={monthPayment.from}
                max={monthPayment.to}
                range={range}
                handleRangeChange={handleRangeChange}
                step={1000}
            >
                <div>www</div>
            </CustomRangeInput>
        </div>
    )
}

interface ICustomRangeInput {
    children: ReactNode;
    min: number;
    max: number;
    range: number;
    handleRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    step: number;
}

export const CustomRangeInput = ({ children, min, max, range, handleRangeChange, step }: ICustomRangeInput) => {
    return (
        <div>
            <div>
                {range}
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={range}
                onChange={handleRangeChange}
            />
            {children}
            {/* <div>
                {errorMessage}
            </div> */}
        </div>
    )
}