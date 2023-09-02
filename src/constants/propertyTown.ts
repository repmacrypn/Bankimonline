export const propertyTown: IPropertyTown[] = [
    { id: 1, town: 'Тель-авив' },
    { id: 2, town: 'Акко' },
    { id: 3, town: 'Ариэль' },
    { id: 4, town: 'Москва' },
    { id: 5, town: 'Минск' },
    { id: 6, town: 'Берлин' },
    { id: 7, town: 'Варшава' },
]

interface IPropertyTown {
    id: number;
    town: string;
}