export const propertyType: IPropertyType[] = [
    { id: 1, type: 'Квартира от застройщика' },
    { id: 2, type: 'Квартира на вторичном рынке' },
    { id: 3, type: 'Частный дом' },
    { id: 4, type: 'Земельный участок / Строительство' },
    { id: 5, type: 'Коммерческая недвижимость' },
    { id: 6, type: 'Предприятие' },
    { id: 7, type: 'Здание торгового назначения' },
    { id: 8, type: 'Муниципальная недвижимость' },
    { id: 9, type: 'Здание складского назначения' },
]

interface IPropertyType {
    id: number;
    type: string;
}