//백엔드 주소
const BASE_URL = "http://xcape-api.ap-northeast-1.elasticbeanstalk.com";
//http://xcape-api.ap-northeast-1.elasticbeanstalk.com/merchants/1/reservations?date=2023-02-13

export interface IGetMerchants {
    result: IMerchants[];
    resultCode: string;
    resultMessage: string;
}

export interface IMerchants {
    address: string;
    id: number;
    name: string;
    themeList: ITheme[];
}

export interface IMerchant {
    id: number;
    name: string;
    address: string;
    result: IMerchants;
}

interface ITheme {
    merchantId: number;
    nameKo: string;
    nameEn: string;
    mainImagePath: string;
    bgImagePath: string;
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
    hasXKit: Boolean;
    isCrimeScene: Boolean;
    useYN: string;
    reservationDtos: string;
}

// xcape 상단 지점 리스트 가져오기
export function fetchMerchantList() {
    return fetch(`${BASE_URL + "/merchants"}`).then((response) =>
        response.json()
    );
}

export function fetchMerchantThemeList(merchantId: number) {
    return fetch(`${BASE_URL + "/merchants/" + merchantId}`).then((response) =>
        response.json()
    );
}

//  export const function fetch
