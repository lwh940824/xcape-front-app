import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

const DatePickerWrapperStyles = createGlobalStyle` 
    .date_picker.full-width {
        width: 150px;
    }
`;

const ReservationWrapper = styled.div`
    border: 1px solid #363636;
    border-radius: 3px;
    background-color: #282828;
`;
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
    background-color: #282828;
    color: ${(props) => props.fontColor};
`;
const BgImage = styled.div`
    padding: 25px;
    background-size: 100% 100%;
`;
const DateForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 55px;
`;
const Possible = styled.div`
    text-align: right;
    color: red;
`;
const Circle = styled(motion.span)`
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background-color: #6be77d;
`;
const Confirm = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    margin: 40px;
    font: inherit;
    color: #ffffff;
`;
const Title = styled.div`
    color: #fff;
    text-align: center;
    font-weight: 500;
    line-height: 150%;
    font-size: 1.6em;
`;
const SubTitle = styled.div`
    font-size: 0.8em;
    text-align: center;
    margin-top: 5px;
    padding-bottom: 30px;
`;
const InputForm = styled.div`
    display: flex;
    padding: 15px 0;
    margin-bottom: 40px;

    border-top: 1px solid #888888;
    border-bottom: 1px solid #888888;
`;
const Phone = styled.div`
    width: 20%;
    color: #aaaaaa;
    margin-left: 5px;
    margin-right: 10px;
    text-align: center;
`;
const EngPhone = styled.div`
    /* font-size: 15.6px; */
    font-size: 0.9em;
    font-weight: 700;
`;
const KrPhone = styled.div`
    /* font-size: 13px; */
    font-size: 0.7em;
    font-weight: 500;
`;
const Input = styled.input`
    width: 100%;
    height: 34px;
    padding: 7px;
    background-color: #383838;
    color: #ffffff;
    border: 0;
`;
const Button = styled.div`
    text-align: center;
    padding: auto;
    background-color: #92c78c;
    font-weight: 500;
    color: #fff;
    border: 1px solid #92c78c;
    width: 55%;
    padding: 12px 35px 12px 35px;
    line-height: 20px;
    text-decoration: none;
    font-size: 1.5em;
    vertical-align: middle;
    top: 0;
    left: 0;
    margin: auto;
    margin-bottom: 20px;
    cursor: pointer;
`;
const Underline = styled(motion.div)`
    height: 40px;
    position: absolute;
    border-bottom: 1px solid;
    border-color: white;
    vertical-align: bottom;
    width: 50%;
`;

function Reservation() {
    const [isReserve, setIsReserve] = useState(true);
    const [date, setDate] = useState<Date>(new Date());
    const toggleReserve = (action: boolean) => {
        setIsReserve(action);
    };
    const handleOnBlur = () => {
        // TODO: 날짜 검증 기능 추가
    };
    return (
        <div>
            <ReservationMenuBar>
                <ReservationMenu
                    onClick={() => toggleReserve(true)}
                    fontColor={isReserve ? "#FFFFFF" : "#6A6A6A"}
                >
                    예약하기
                    {isReserve ? <Underline layoutId="underline" /> : null}
                </ReservationMenu>
                <ReservationMenu
                    onClick={() => toggleReserve(false)}
                    fontColor={isReserve ? "#6A6A6A" : "#FFFFFF"}
                >
                    예약확인 및 취소
                    {isReserve ? null : <Underline layoutId="underline" />}
                </ReservationMenu>
            </ReservationMenuBar>
            <BgImage>
                {isReserve ? (
                    <ReservationWrapper>
                        <DateForm>
                            <Phone>
                                <EngPhone>DATE</EngPhone>
                                <KrPhone>날짜</KrPhone>
                            </Phone>
                            <DatePicker
                                dateFormat="yyyy-MM-dd"
                                wrapperClassName="date_picker full-width"
                                selected={date}
                                onChange={(selectDate: Date) =>
                                    setDate(selectDate)
                                }
                                onBlur={handleOnBlur}
                            />
                            <DatePickerWrapperStyles />
                        </DateForm>
                        <Possible>
                            {/* TODO: 앞에 동그라미 추가 */}
                            <Circle />
                            예약가능 예약완료
                        </Possible>
                    </ReservationWrapper>
                ) : (
                    <ReservationWrapper>
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
                        <Button>예약확인</Button>
                    </ReservationWrapper>
                )}
            </BgImage>
        </div>
    );
}

export default Reservation;
