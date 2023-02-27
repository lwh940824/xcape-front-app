import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
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
    SelectDate,
    DateEn,
    DateForm,
    DateKr,
    Difficulty,
    EngPhone,
    FormWrapper,
    Input,
    InputForm,
    KrPhone,
    Overlay,
    Personnel,
    Phone,
    Possible,
    ReservationCheck,
    ReservationMenu,
    ReservationMenuBar,
    ReservationWrapper,
    SelectTheme,
    SelectTime,
    Star,
    SubTitle,
    Theme,
    ThemeImg,
    ThemeList,
    ThemeTitle,
    Time,
    Timetable,
    TimeWrapper,
    Title,
    TitleEn,
    TitleKr,
    Underline,
    UserName,
    UserPhone,
    Row,
    FormEnTitle,
    FormKrTitle,
    TitleWrapper,
    Select,
    CheckBox,
    Privacy,
    CheckBoxRow,
    Accept,
} from "./styled/reservationStyled";
import { Form, useMatch, useNavigate } from "react-router-dom";
import { animate, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const DatePickerWrapperStyles = createGlobalStyle` 
    .date_picker.full-width {
        width: 150px;
    }
`;

const reservationdata = [
    {
        time: "9:10",
        isReserve: false,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: true,
    },
    {
        time: "9:10",
        isReserve: false,
    },
    {
        time: "9:10",
        isReserve: true,
    },
];

interface IForm {
    date: string;
    time: string;
    themeName: string;
    name: string;
    phone: number;
    person: number;
}

interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

function Reservation() {
    const navigate = useNavigate();
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const [data] = useState(dump);
    const [isReserveMenu, setisReserveMenu] = useState(true);
    const [date, setDate] = useState<Date>(new Date());
    const [curDate, setCurDate] = useState<String>();
    const [selected, setSelected] = useState<Number>(0);
    const onReserveMatch = useMatch("/:merchant/reservation/:time");

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({ defaultValues: {} });
    const onVaild = () => {
        console.log("submit");
    };

    const toggleReserve = (action: boolean) => {
        setisReserveMenu(action);
    };
    const reservationConfirm = () => {};
    const handleOnBlur = () => {
        // TODO: 날짜 검증 기능 추가
    };
    const handleSelect = (event: any) => {
        setSelected(event.target.value);
    };

    const onTimeClicked = (isPossible: Boolean, time: number) => {
        if (!isPossible) navigate(`${time}`);
    };
    const onOverlayClick = () => navigate(-1);

    return (
        <div>
            <ReservationMenuBar>
                <ReservationMenu
                    onClick={() => toggleReserve(true)}
                    fontColor={isReserveMenu ? "#FFFFFF" : "#6A6A6A"}
                >
                    예약하기
                    {isReserveMenu ? <Underline layoutId="underline" /> : null}
                </ReservationMenu>
                <ReservationMenu
                    onClick={() => toggleReserve(false)}
                    fontColor={isReserveMenu ? "#6A6A6A" : "#FFFFFF"}
                >
                    예약확인 및 취소
                    {isReserveMenu ? null : <Underline layoutId="underline" />}
                </ReservationMenu>
            </ReservationMenuBar>
            <BgImage>
                {isReserveMenu ? (
                    <ReservationWrapper>
                        <DateForm>
                            <Phone>
                                <DateEn>DATE</DateEn>
                                <DateKr>날짜</DateKr>
                            </Phone>
                            <DatePicker
                                dateFormat={"yyyy-MM-dd"}
                                wrapperClassName="date_picker full-width"
                                selected={date}
                                onChange={(selectDate: Date) => {
                                    const newDate = new Date(selectDate)
                                        .toLocaleDateString()
                                        .replace(/\./g, "")
                                        .replace(/\s/g, "-");
                                    setDate(selectDate);
                                    setCurDate(newDate);
                                }}
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
                                    {reservationdata.map((resv, idx) => (
                                        <div>
                                            <TimeWrapper
                                                key={idx}
                                                marginLeft={
                                                    idx % 3 == 0 ? true : false
                                                }
                                                isReserve={resv.isReserve}
                                                onClick={() =>
                                                    onTimeClicked(
                                                        resv.isReserve,
                                                        1
                                                    )
                                                }
                                            >
                                                <Time>{resv.time}</Time>
                                                <ReservationCheck>
                                                    {resv.isReserve
                                                        ? "예약완료"
                                                        : "예약가능"}
                                                </ReservationCheck>
                                            </TimeWrapper>
                                        </div>
                                    ))}
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
            <AnimatePresence>
                {onReserveMatch && (
                    <>
                        <Overlay
                            onClick={onOverlayClick}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <FormWrapper isPortrait={isPortrait}>
                            <Form onSubmit={handleSubmit(onVaild)}>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>DATE</FormEnTitle>
                                        <FormKrTitle>날짜</FormKrTitle>
                                    </TitleWrapper>
                                    <SelectDate>
                                        <div>{curDate}</div>
                                    </SelectDate>
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>TIME</FormEnTitle>
                                        <FormKrTitle>시간</FormKrTitle>
                                    </TitleWrapper>
                                    <SelectTime></SelectTime>
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>ROOM</FormEnTitle>
                                        <FormKrTitle>테마</FormKrTitle>
                                    </TitleWrapper>
                                    <SelectTheme></SelectTheme>
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>NAME</FormEnTitle>
                                        <FormKrTitle>예약자</FormKrTitle>
                                    </TitleWrapper>
                                    <UserName
                                        {...register("name", {
                                            required:
                                                "이름은 필수 입력 항목입니다.",
                                        })}
                                    />
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>PHONE</FormEnTitle>
                                        <FormKrTitle>연락처</FormKrTitle>
                                    </TitleWrapper>
                                    <UserPhone
                                        {...register("phone", {
                                            required:
                                                "전화번호는 필수 입력 항목입니다.",
                                            pattern: {
                                                value: /^[0-9]{3}[0-9]{4}[-\s\.]?[0-9]{4}$/,
                                                message:
                                                    "숫자만 입력 가능합니다.",
                                            },
                                        })}
                                        placeholder="숫자만 입력 해주세요."
                                    />
                                </Row>
                                <Row notice={true}>
                                    * 입력하신 연락처로 예약취소&변경이 가능하니
                                    신중히 입력 부탁드립니다.
                                </Row>
                                <Row notice={true}>
                                    * 체험 당일 예약 확인을 위하여 입력하신
                                    번호로 전화 또는 문자를 드립니다. 답변이
                                    없을시 예약이 자동 취소됩니다.
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>PLAYERS</FormEnTitle>
                                        <FormKrTitle>인원선택</FormKrTitle>
                                    </TitleWrapper>
                                    <Select onChange={handleSelect}>
                                        <option value={1}>asd</option>
                                        <option value={1}>asd</option>
                                        <option value={1}>asd</option>
                                        <option value={1}>asd</option>
                                        <option value={1}>asd</option>
                                    </Select>
                                </Row>
                                <Row>
                                    <TitleWrapper isPortrait={isPortrait}>
                                        <FormEnTitle>PRICE</FormEnTitle>
                                        <FormKrTitle>가격</FormKrTitle>
                                    </TitleWrapper>
                                </Row>
                                <Row>
                                    <TitleWrapper
                                        isPortrait={isPortrait}
                                        center={true}
                                    >
                                        <FormEnTitle>NOTICE</FormEnTitle>
                                        <FormKrTitle>유의사항</FormKrTitle>
                                    </TitleWrapper>
                                </Row>
                                <Row notice={true}>
                                    휴대전화 번호가 정확하지 않을 경우 예약이
                                    취소되니 유의해 주시기 바랍니다.
                                </Row>
                                <Row notice={true}>
                                    임산부, 노약자, 유아 어린이(13세미만)나
                                    페소공포증, 심장질환 등의 질병이 있으신
                                    분들은 예약전 전화문의 바랍니다.
                                </Row>
                                <Row notice={true}>
                                    예약취소는 예약시간 24시간 전까지만
                                    가능합니다. 원활한 진행을 위해 게임 시작
                                    10분 전까지 도착 부탁드립니다.
                                </Row>
                            </Form>
                            <CheckBoxRow>
                                <CheckBox type="checkbox" />
                                <Privacy>개인정보 취급 방침에 동의함</Privacy>
                            </CheckBoxRow>
                            <Accept onClick={handleSubmit(onVaild)}>
                                예약하기
                            </Accept>
                        </FormWrapper>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Reservation;
