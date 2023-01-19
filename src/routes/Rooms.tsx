import styled from "styled-components";

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
    background-color: greenyellow;
`;
const Image = styled.div`
    width: 35vw;
    height: 15vh;
    background-color: aqua;
`;
const Content = styled.div`
    width: 100%;
    margin: 2.3vw;
`;
const Title = styled.div`
    margin-bottom: 0.5vh;
    font-size: 1.2em;
`;
const Genre = styled.div`
    margin-bottom: 0.5vh;
`;
const Level = styled.div`
    margin-bottom: 0.5vh;
`;

function Rooms() {
    return (
        <Container>
            <Cover>
                <Room>
                    <Image></Image>
                    <Content>
                        <Title>핑퐁핑퐁</Title>
                        <Genre>아케이드/미션</Genre>
                        <Level>★★★☆☆</Level>
                    </Content>
                </Room>
            </Cover>
            <Cover>
                <Room>
                    <Image></Image>
                    <Content>
                        <Title>핑퐁핑퐁</Title>
                        <Genre>아케이드/미션</Genre>
                        <Level>★★★☆☆</Level>
                    </Content>
                </Room>
            </Cover>
            <Cover>
                <Room>
                    <Image></Image>
                    <Content>
                        <Title>핑퐁핑퐁</Title>
                        <Genre>아케이드/미션</Genre>
                        <Level>★★★☆☆</Level>
                    </Content>
                </Room>
            </Cover>
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
