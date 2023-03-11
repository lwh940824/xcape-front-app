import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue } from "recoil";
import {
    fetchMerchantList,
    fetchMerchantThemeList,
    IGetMerchants,
    IMerchant,
    IMerchants,
} from "../api";
import { merchantsIndex } from "../atom";
import {
    Ability,
    Box,
    Circle,
    Container,
    Content,
    Title,
    Cover,
    Genre,
    Image,
    Level,
    Name,
    Participant,
    Room,
    Row,
} from "../components/styled/roomsStyled";
import { dump } from "../dump";

function Rooms() {
    const merchantIndex = useRecoilValue(merchantsIndex);
    const { data, isLoading } = useQuery<IMerchant>(["allData", "themes"], () =>
        fetchMerchantThemeList(merchantIndex)
    );
    const merchants = useRecoilValue(merchantsIndex);
    console.log(merchants);
    // const [data] = useState(dump);
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

    useEffect(() => {
        console.log(isPortrait);
    }, [isPortrait]);

    const drawStar = (difficulty: number) => {
        const star = "★".repeat(difficulty);
        const level = star + "☆".repeat(5 - difficulty);
        return level;
    };
    const drawCircle = (num: number) => {
        let circleArr = [];
        console.log(">>>>", isPortrait ? "2vw" : "10px");

        for (let i = 5; i > 0; i--) {
            circleArr.push(
                <Circle bgColor={num > i ? "#29433C" : "#ffffff"} />
            );
        }
        return circleArr;
    };
    return (
        <Container>
            {/* {[1, 2, 3, 4, 5, 6].map((cur, index) => ( */}
            {data?.result?.themeList.map((cur, index) => (
                <Cover key={index}>
                    <Room>
                        <Image></Image>
                        <Content>
                            <Title themeColor={cur.colorCode}>
                                {cur.nameKo}
                            </Title>
                            <Genre themeColor={cur.colorCode}>
                                {cur.genre}
                            </Genre>
                            <Row>
                                <Level themeColor={cur.colorCode}>
                                    {drawStar(cur.difficulty)}
                                </Level>
                                <Participant themeColor={cur.colorCode}>
                                    {"인원" +
                                        cur.minParticipantCount +
                                        "명~" +
                                        cur.maxParticipantCount +
                                        "명"}
                                </Participant>
                            </Row>
                            <Ability themeColor={cur.colorCode}>
                                {/* {TODO: 요구 능력 추가} */}
                                {/* {Object.entries(cur.ability).map(
                                    (target, index) => {
                                        return (
                                            <Box
                                                bottom={
                                                    index <= 1 ? true : false
                                                }
                                            >
                                                <Name>{target[0]}</Name>
                                                {drawCircle(target[1])}
                                            </Box>
                                        );
                                    }
                                )} */}
                            </Ability>
                        </Content>
                    </Room>
                </Cover>
            ))}
        </Container>
    );
}

export default Rooms;
