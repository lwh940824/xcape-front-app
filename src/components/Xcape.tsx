import styled from "styled-components";
import xcape from "../assets/images/xcape.jpeg";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
    color: red;
    font-size: 25px;
`;
const Nav = styled.nav`
    display: flex;
    margin-top: 10px;
`;
const Underline = styled(motion.div)`
    border-bottom: 1px solid;
    border-color: white;
    vertical-align: bottom;
    height: 1vh;
`;
const Brand = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.6em;
    color: whitesmoke;
`;
const Info = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.6em;
    color: whitesmoke;
`;
const Acess = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.6em;
    color: whitesmoke;
`;
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 50%;
`;
const XcapeImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
`;
const YoutubeBox = styled.div`
    display: block;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    position: relative;
`;

function Xcape() {
    const [menu, setMenu] = useState<String>("brand");
    const [imageHeight, setImageHeight] = useState<number>(0);
    const getHeight = ({ target }: any) => {
        setImageHeight(target.height);
        console.log(target.height * 0.7);
    };
    const toggleMenu = (action: String) => {
        setMenu(action);
    };
    return (
        <Container>
            <Nav>
                <Brand onClick={() => toggleMenu("brand")}>
                    브랜드소개
                    {menu === "brand" ? (
                        <Underline layoutId="underline" />
                    ) : null}
                </Brand>
                <Info onClick={() => toggleMenu("info")}>
                    이용안내
                    {menu === "info" ? (
                        <Underline layoutId="underline" />
                    ) : null}
                </Info>
                <Acess onClick={() => toggleMenu("access")}>
                    오시는 길
                    {menu === "access" ? (
                        <Underline layoutId="underline" />
                    ) : null}
                </Acess>
            </Nav>
            <Wrapper>
                <XcapeImage onLoad={getHeight} src={xcape} />
                <YoutubeBox>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=JlTa9cVywmA"
                        style={{
                            position: "absolute",
                            top: `${imageHeight * 0.125}px`,
                            left: "50%",
                            width: "100%",
                            height: "100%",
                        }}
                        width={"90vw"}
                        height={"20vh"}
                    />
                </YoutubeBox>
            </Wrapper>
        </Container>
    );
}

export default Xcape;
