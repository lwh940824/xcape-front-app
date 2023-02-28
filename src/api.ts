//백엔드 주소
const BASE_URL = "http://xcape-admin.ap-northeast-1.elasticbeanstalk.com";
//http://xcape-api.ap-northeast-1.elasticbeanstalk.com/merchants/1/reservations?date=2023-02-13
// xcape 상단 지점 리스트 가져오기
export function fetchMerchantList() {
    return fetch(`${BASE_URL + "/merchants"}`).then((response) => {
        console.log(response);
        response.json();
    });
}

//  export const function fetch
