export interface ITextInput {
    inputValue: string;
    errorMessage: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}