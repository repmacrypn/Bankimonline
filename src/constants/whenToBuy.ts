export const whenToBuyProperty: IWhenToBuyProperty[] = [
    { id: 1, when: 'В ближайший месяц' },
    { id: 2, when: 'В ближайшие 2 месяца' },
    { id: 3, when: 'В ближайшие 3 месяца' },
    { id: 4, when: 'В ближайшие 6 месяцев' },
]

interface IWhenToBuyProperty {
    id: number;
    when: string;
}