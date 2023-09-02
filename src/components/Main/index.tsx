import { propertyTown } from 'src/constants/propertyTown'
import { doYouOwnProperty } from 'src/constants/doYouOwnProp'
import { propertyType } from 'src/constants/propertyType'
import { whenToBuyProperty } from 'src/constants/whenToBuy'
import { Select } from '../Select'

export const Main = () => {
    return (
        <main>
            <Select
                placeholder='Выберите город'
                label='Город покупки недвижимости'
            >
                {propertyTown.map(p => <option key={p.id}>{p.town}</option>)}
            </Select>
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