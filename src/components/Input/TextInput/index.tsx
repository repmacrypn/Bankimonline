import { ITextInput } from './interface'

export const TextInput = ({ inputValue, handleInputChange, errorMessage }: ITextInput) => {
    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
            <div>
                {errorMessage}
            </div>
        </div>
    )
}