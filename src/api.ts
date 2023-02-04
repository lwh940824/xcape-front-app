//백엔드 주소
const BASE_URL = "http://xcape-admin.ap-northeast-1.elasticbeanstalk.com/";

export {};
// xcape 상단 지점 리스트 가져오기
export function fetchMerchantList() {
    return fetch(`${BASE_URL + "merchants"}`).then((response) =>
        response.json()
    );
}

//  export const function fetch
