import styled from "styled-components";
import xcape from "../assets/images/xcape.jpeg";
import guide1 from "../assets/images/guide_1.png";
import guide2 from "../assets/images/guide_2.png";
import guide3 from "../assets/images/guide_3.png";
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
    cursor: pointer;
`;
const Info = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.6em;
    color: whitesmoke;
    cursor: pointer;
`;
const Acess = styled.div`
    width: 100%;
    text-align: center;
    font-size: 0.6em;
    color: whitesmoke;
    cursor: pointer;
`;
const Guide = styled.img<{ cursor?: string }>`
    width: 100%;
    cursor: ${(props) => props.cursor};
`;
const BrandWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 50%;
`;
const InfoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;
const XcapeImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
`;
const YoutubeBox = styled.div`
    margin: 0 5vw;
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
    const onBenefits = () => {
        console.log("예약혜택 바로가기");
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
            {menu === "brand" ? (
                <BrandWrapper>
                    <XcapeImage onLoad={getHeight} src={xcape} />
                    <YoutubeBox>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JlTa9cVywmA"
                            style={{
                                position: "absolute",
                                top: `${imageHeight * 0.055}%`,
                                width: "100%",
                                height: "100%",
                            }}
                            width={"100%"}
                            height={"80%"}
                        />
                    </YoutubeBox>
                </BrandWrapper>
            ) : menu === "info" ? (
                <InfoWrapper>
                    <Guide src={guide1}></Guide>
                    <Guide
                        cursor={"pointer"}
                        src={guide2}
                        onClick={onBenefits}
                    ></Guide>
                    <Guide src={guide3}></Guide>
                </InfoWrapper>
            ) : menu === "access" ? null : null}
        </Container>
    );
}

export default Xcape;
