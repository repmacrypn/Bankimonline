import { doYouOwnProperty } from 'src/constants/doYouOwnProp'
import { propertyType } from 'src/constants/propertyType'
import { whenToBuyProperty } from 'src/constants/whenToBuy'
import { Select } from '../Select'
import { CustomSelectSearch } from '../Select/CustomSelectSearch'

export const Main = () => {
    return (
        <main>
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

export const CustomSelect = () => {
    return (
        <div>

        </div>
    )
}