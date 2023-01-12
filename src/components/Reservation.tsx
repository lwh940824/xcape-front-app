import { useState } from "react";
import styled from "styled-components";

const ReservationMenuBar = styled.div`
    width: 100%;
    display: flex;
`;
const ReservationMenu = styled.div<{ fontColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40px;
    color: ${(props) => props.fontColor};
`;
const Confirm = styled.div`
    padding: 25px;
    margin: 25px;
    color: #ffffff;
`;
const Title = styled.div`
    font-size: 25px;
    color: #ffffff;
    text-align: center;
`;
const SubTitle = styled.div`
    font-size: 15px;
    text-align: center;
    margin-top: 5px;
    padding-bottom: 30px;
`;
const InputForm = styled.div`
    display: flex;
    padding: 15px 0;
    border-top: 1px solid;
    border-bottom: 1px solid;
`;
const Phone = styled.div`
    width: 20%;
    color: #aaaaaa;
    margin-left: 5px;
    margin-right: 10px;
    text-align: center;
`;
const EngPhone = styled.div`
    font-size: 15.6px;
    font-weight: 700;
`;
const KrPhone = styled.div`
    font-size: 13px;
    font-weight: 500;
`;
const Input = styled.input`
    width: 100%;
    height: 34px;
    background-color: #383838;
    border: 0;
`;

function Reservation() {
    const [isReserve, setIsReserve] = useState(true);
    const toggleReserve = (action: boolean) => {
        setIsReserve(action);
    };
    return (
        <div>
            <ReservationMenuBar>
                <ReservationMenu
                    onClick={() => toggleReserve(true)}
                    fontColor={isReserve ? "#FFFFFF" : "#6A6A6A"}
                >
                    예약하기
                </ReservationMenu>
                <ReservationMenu
                    onClick={() => toggleReserve(false)}
                    fontColor={isReserve ? "#6A6A6A" : "#FFFFFF"}
                >
                    예약확인 및 취소
                </ReservationMenu>
            </ReservationMenuBar>
            <div>
                {isReserve ? (
                    "에약하기"
                ) : (
                    <Confirm>
                        <Title>MY RESERVATION</Title>
                        <SubTitle>예약확인</SubTitle>
                        <InputForm>
                            <Phone>
                                <EngPhone>PHONE</EngPhone>
                                <KrPhone>연락처</KrPhone>
                            </Phone>
                            <Input />
                        </InputForm>
                    </Confirm>
                )}
            </div>
        </div>
    );
}

export default Reservation;
