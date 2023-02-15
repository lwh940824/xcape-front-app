import { useState } from "react";
import { Title } from "../components/styled/reservationStyled";
import {
    Ability,
    Box,
    Circle,
    Container,
    Content,
    Cover,
    Genre,
    Image,
    Level,
    Name,
    Room,
} from "../components/styled/roomsStyled";
import { dump } from "../dump";

function Rooms() {
    // const { isLoading, data } = useQuery(["allData"], fetchMerchantList);
    const [data] = useState(dump);

    const drawStar = (difficulty: number) => {
        const star = "★".repeat(difficulty);
        const level = star + "☆".repeat(5 - difficulty);
        return level;
    };
    const drawCircle = (num: number) => {
        let circleArr = [];
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
            {[1, 2].map((cur, index) => (
                <Cover key={index}>
                    <Room>
                        <Image></Image>
                        <Content>
                            <Title>{data.nameKr}</Title>
                            <Genre themeColor={data.colorCode}>
                                아케이드/미션
                            </Genre>
                            <Level themeColor={data.colorCode}>
                                {drawStar(data.difficulty)}
                            </Level>
                            <Ability themeColor={data.colorCode}>
                                {/* {TODO: 요구 능력 추가} */}
                                {Object.entries(data.ability).map(
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
                                )}
                            </Ability>
                        </Content>
                    </Room>
                </Cover>
            ))}
            {/* <Room>
                <Image>s</Image>
                <Title>핑퐁핑퐁</Title>
            </Room>
            <Room>
                <Image>s</Image>
                <Title>핑퐁핑퐁</Title>
            </Room> */}
        </Container>
    );
}

export default Rooms;
