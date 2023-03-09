//백엔드 주소
const BASE_URL = "http://xcape-api.ap-northeast-1.elasticbeanstalk.com";
//http://xcape-api.ap-northeast-1.elasticbeanstalk.com/merchants/1/reservations?date=2023-02-13

export interface IMerchants {
    id: number;
    name: string;
    address: string;
    themeDtoList: IThemeList[];
}

export interface IThemeList {
    id: number;
    merchantId: number;
    nameKo: string;
    nameEn: string;
    mainImagePath: string;
    bgImagePath: string;
    generalPrice: number;
    openRoomPrice: number;
    timetable: string;
    description: string;
    reasoning: number;
    observation: number;
    activity: number;
    teamwork: number;
    minParticipantCount: number;
    maxParticipantCount: number;
    difficulty: number;
    genre: string;
    point: string;
    youtubeLink: string;
    colorCode: string;
    hasXKit: string;
    isCrimeScene: string;
}

// xcape 상단 지점 리스트 가져오기
export function fetchMerchantList() {
    return fetch(`${BASE_URL + "/merchants"}`).then((response) =>
        response.json()
    );
}

//  export const function fetch
