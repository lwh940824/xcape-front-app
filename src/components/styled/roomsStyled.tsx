import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: blue;
    padding: 0 3%;
`;
export const Cover = styled.div`
    background-color: gray;
    padding: 2%;
    margin: 4vh 0.2vw;
`;
export const Room = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 17vh;
    background-color: greenyellow;
`;
export const Image = styled.div`
    width: 30%;
    height: 100%;
    background-color: aqua;
`;
export const Content = styled.div`
    width: 70%;
    margin: 3%;
`;
export const Title = styled.div`
    margin-bottom: 0.5vh;
    font-size: 1.2em;
`;
export const Genre = styled.div<{ themeColor: string }>`
    width: max-content;
    padding: 0.4vh 1.3vw;
    margin-bottom: 0.5vh;
    font-size: 0.5em;
    color: white;
    background-color: ${(props) => props.themeColor};
`;
export const Level = styled.div<{ themeColor: string }>`
    margin-bottom: auto;
    font-size: 1.5em;
    color: ${(props) => props.themeColor};
`;
export const Ability = styled.div<{ themeColor: string }>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.5vh 0vw;
    background-color: ${(props) => props.themeColor};
`;
export const Name = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    font-size: 0.6em;
    color: white;
`;
export const Box = styled.div<{ bottom: boolean }>`
    display: flex;
    height: 1.5vh;
    margin: 0 0.6vw;
    margin-bottom: ${(props) => (props.bottom ? 0.3 : null)}vh;
    margin-right: 1.5vw;
`;
export const Circle = styled.div<{ bgColor: string }>`
    width: 8px;
    height: 8px;
    margin: auto;
    margin-right: 3%;
    text-align: center;
    border-radius: 8px;
    background-color: ${(props) => props.bgColor};
    /* background-color: white; */
`;
