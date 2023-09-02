import { useState } from 'react'
import styles from './styles.module.scss'
import { IPropertyTown, propertyTown } from 'src/constants/propertyTown'

export const CustomSelectSearch = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectSearchValue, setSelectSearchValue] = useState('Выберите город')
    const [inputValue, setInputValue] = useState('')
    const [dropdown, setDropdown] = useState<IPropertyTown[]>(propertyTown)

    const filterDropDown = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setDropdown(propertyTown.filter(p => p.town.startsWith(e.target.value)))
    }

    return (
        <div className={styles.dropdown}>
            <button onClick={() => setIsVisible(!isVisible)} className={styles.button}>
                {selectSearchValue}
            </button>
            <div className={isVisible ? styles.content : styles.hidden}>
                <input
                    value={inputValue}
                    onChange={filterDropDown}
                    type="text"
                    placeholder="Поиск.."
                />
                {
                    //children   
                    dropdown.map(p => <div
                        onClick={() => setSelectSearchValue(p.town)}
                        key={p.id}>{p.town}
                    </div>)
                }
            </div>
        </div>
    )
}