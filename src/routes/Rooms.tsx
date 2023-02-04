import { useState } from "react";
import styled from "styled-components";
import themeImage from "../../public/img/theme.jpg";
import { dump } from "../dump";
import { drawFigure } from "../util";
const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    padding-left: 5vw;
    padding-right: 5vw;
`;
const Cover = styled.div`
    background-color: gray;
    padding: 2vw;
    margin: 4vh 0.2vw;
`;
const Room = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 17vh;
    background-color: greenyellow;
`;
const Image = styled.div`
    width: 30%;
    height: 100%;
    background-color: aqua;
`;
const Content = styled.div`
    width: 70%;
    margin: 2.3vw;
`;
const Title = styled.div`
    margin-bottom: 0.5vh;
    font-size: 1.2em;
`;
const Genre = styled.div<{ themeColor: string }>`
    width: max-content;
    padding: 0.4vh 1.3vw;
    margin-bottom: 0.5vh;
    font-size: 0.5em;
    color: white;
    background-color: ${(props) => props.themeColor};
`;
const Level = styled.div<{ themeColor: string }>`
    margin-bottom: 0.5vh;
    font-size: 1.5em;
    color: ${(props) => props.themeColor};
`;
const Ability = styled.div<{ themeColor: string }>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5vh 0vw;
    background-color: ${(props) => props.themeColor};
`;
const Name = styled.div`
    width: 10vw;
    margin: auto;
    text-align: center;
    font-size: 0.6em;
    color: white;
`;
const Box = styled.div<{ bottom: boolean }>`
    display: flex;
    height: 1.7vh;
    margin: 0.2vh 0.6vw;
    margin-bottom: ${(props) => (props.bottom ? 0.3 : null)}vh;
    margin-right: 1.5vw;
`;
const Circle = styled.div<{ bgColor: string }>`
    width: 2vw;
    height: 2vw;
    margin: auto;
    text-align: center;
    border-radius: 2vw;
    background-color: ${(props) => props.bgColor};
    /* background-color: white; */
`;

function Rooms() {
    const [data, setData] = useState(dump);

    const drawStar = (difficulty: number) => {
        const star = "★".repeat(difficulty);
        const level = star + "☆".repeat(5 - difficulty);
        return level;
    };
    const drawCircle = (num: number) => {
        // const circle = "⏺".repeat(num);
        // const result = circle + "○";
        // return result;
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
            {[1].map((cur, index) => (
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
