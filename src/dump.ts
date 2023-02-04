interface IAvility {
    [key: string]: number;
}

interface IDump {
    activity: number;
    bgImagePath: string;
    colorCode: string;
    description: string;
    difficulty: number;
    generalPrice: Array<Object>;
    // '[{"person":1,"price":30000},{"person":4,"price":50000},{"person":5,"price":60000}]',
    genre: string;
    hasXKit: string;
    id: number;
    isCrimeScene: string;
    mainImagePath: string;
    maxPersonnel: number;
    merchantId: number;
    minPersonnel: number;
    nameKr: string;
    nameEn: string;
    observation: number;
    openRoomPrice: Array<Object>;
    // '[{"person":1,"price":30000},{"person":4,"price":50000},{"person":5,"price":60000}]',
    point: string;
    reasoning: number;
    teamwork: number;
    timetable: Array<string>;
    // ability: { 추리력: number; 팀워크: number; 관찰력: number; 활동성: number };
    ability: IAvility;
}

export const dump: IDump = {
    activity: 3,
    bgImagePath: "test",
    colorCode: "#E14FBC",
    description: "test",
    difficulty: 4,
    generalPrice: [
        { person: 1, price: 30000 },
        { person: 4, price: 50000 },
        { person: 5, price: 60000 },
    ],
    genre: "추리/스릴러",
    hasXKit: "Y",
    id: 2,
    isCrimeScene: "N",
    mainImagePath: "ㅅㄷㄴㅅ",
    maxPersonnel: 6,
    merchantId: 1,
    minPersonnel: 2,
    nameKr: "수취인 초대",
    nameEn: "HIDE & SEEK",
    observation: 4,
    openRoomPrice: [
        { person: 1, price: 30000 },
        { person: 4, price: 50000 },
        { person: 5, price: 60000 },
    ],
    point: "string",
    reasoning: 3,
    teamwork: 4,
    timetable: ["09:00", "10:00", "11:30"],
    ability: { 추리력: 4, 팀워크: 3, 관찰력: 2, 활동성: 2 },
};
