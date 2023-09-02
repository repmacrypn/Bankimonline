export const doYouOwnProperty: IDoYouOwnProperty[] = [
    { id: 1, property: 'Нет, я пока не владею недвижимостью' },
    { id: 2, property: 'Да, у меня уже есть недвижимость в собственности' },
    { id: 3, property: 'Я собираюсь продать единственную недвижимость в ближайшие два года, чтобы использовать полученный капитал для приобретения новой' },
    { id: 4, property: 'Обещает быть в скором времени' },
    { id: 5, property: 'Нет, и не планируется' },
]

interface IDoYouOwnProperty {
    id: number;
    property: string;
}