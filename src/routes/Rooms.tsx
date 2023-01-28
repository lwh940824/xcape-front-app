import { useState } from "react";
import styled from "styled-components";
import themeImage from "../../public/img/theme.jpg";
import { dump } from "../dump";
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
const Genre = styled.div`
    margin-bottom: 0.5vh;
    font-size: 0.75em;
`;
const Level = styled.div`
    margin-bottom: 0.5vh;
    font-size: 1.1em;
`;
const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: vw;
    height: 8vh;
    margin-left: 0.5vw;
    background-color: #000000;
`;
const Reasoning = styled.div`
    display: flex;
    align-items: center;
    margin: 2vw;
    /* margin-right: ; */
    color: #ffffff;
    font-size: 0.75em;
`;
const Circle = styled.div`
    width: 2vw;
    height: 2vw;
    margin-left: 1vw;
    border-radius: 2vw;
    background-color: white;
`;

function Rooms() {
    const [data, setData] = useState(dump);
    return (
        <Container>
            {[1, 2, 3, 4, 5, 6].map((cur, index) => (
                <Cover key={index}>
                    <Room>
                        <Image></Image>
                        <Content>
                            <Title>핑퐁핑퐁</Title>
                            <Genre>아케이드/미션</Genre>
                            <Level>★★★☆☆</Level>
                            <Box>
                                <Reasoning>
                                    추리력
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                </Reasoning>
                                <Reasoning>
                                    관찰력
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                </Reasoning>
                                <Reasoning>
                                    활동력
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                </Reasoning>
                                <Reasoning>
                                    활동성
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                    <Circle />
                                </Reasoning>
                            </Box>
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
