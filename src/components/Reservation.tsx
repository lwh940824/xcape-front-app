import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dump } from "../dump";
import { drawFigure } from "../util";
import reservation_themeImg from "../assets/images/reservation_themeImg.jpeg";
import {
    Available,
    BgImage,
    Button,
    Condition,
    Confirm,
    DateEn,
    DateForm,
    DateKr,
    Difficulty,
    EngPhone,
    Input,
    InputForm,
    KrPhone,
    Personnel,
    Phone,
    Possible,
    ReservationMenu,
    ReservationMenuBar,
    ReservationWrapper,
    Star,
    SubTitle,
    Theme,
    ThemeImg,
    ThemeList,
    ThemeTitle,
    Time,
    Timetable,
    Title,
    TitleEn,
    TitleKr,
    Underline,
} from "./styled/reservationStyled";

const DatePickerWrapperStyles = createGlobalStyle` 
    .date_picker.full-width {
        width: 150px;
    }
`;

function Reservation() {
    const [data] = useState(dump);
    const [isReserve, setIsReserve] = useState(true);
    const [date, setDate] = useState<Date>(new Date());
    const toggleReserve = (action: boolean) => {
        setIsReserve(action);
    };
    const reservationConfirm = () => {};
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
                                <DateEn>DATE</DateEn>
                                <DateKr>날짜</DateKr>
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
                            <Available color={"#6BE77D"}>⦁예약가능</Available>
                            <Available color={"#4D4D4D"} marginRight={"8px"}>
                                ⦁예약완료
                            </Available>
                        </Possible>
                        <ThemeList>
                            {/* TODO: 테마 예약 리스트 렌더 */}
                            <Theme>
                                <ThemeTitle>
                                    <TitleKr>{data.nameKr}</TitleKr>
                                    <TitleEn>{data.nameEn}</TitleEn>
                                </ThemeTitle>
                                <Condition>
                                    <Difficulty>난이도</Difficulty>
                                    <Star>{drawFigure(data.difficulty)}</Star>
                                    <Personnel>{`인원 ${data.minPersonnel}~${data.maxPersonnel}명`}</Personnel>
                                </Condition>
                                <ThemeImg src={reservation_themeImg} />
                                <Timetable>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                    <Time>9:10</Time>
                                </Timetable>
                            </Theme>
                            <Theme>
                                <ThemeTitle>
                                    <TitleKr>{data.nameKr}</TitleKr>
                                    <TitleEn>{data.nameEn}</TitleEn>
                                </ThemeTitle>
                                <Condition>
                                    <Difficulty>난이도</Difficulty>
                                    <Star>{drawFigure(data.difficulty)}</Star>
                                    <Personnel>{`인원 ${data.minPersonnel}~${data.maxPersonnel}명`}</Personnel>
                                </Condition>
                                <ThemeImg src={reservation_themeImg} />
                            </Theme>
                            <Theme>
                                <ThemeTitle>
                                    <TitleKr>{data.nameKr}</TitleKr>
                                    <TitleEn>{data.nameEn}</TitleEn>
                                </ThemeTitle>
                                <Condition>
                                    <Difficulty>난이도</Difficulty>
                                    <Star>{drawFigure(data.difficulty)}</Star>
                                    <Personnel>{`인원 ${data.minPersonnel}~${data.maxPersonnel}명`}</Personnel>
                                </Condition>
                                <ThemeImg src={reservation_themeImg} />
                            </Theme>
                        </ThemeList>
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
                        <Button onClick={reservationConfirm}>예약확인</Button>
                    </ReservationWrapper>
                )}
            </BgImage>
        </div>
    );
}

export default Reservation;
