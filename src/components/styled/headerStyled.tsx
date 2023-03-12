import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.ku.bgcolor};
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.merchats.onBgColor};
    margin: auto;
`;
export const MerChants = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Merchant = styled(motion.li)`
    display: grid;
    grid-template-columns: repeat(1fr);
    width: auto;
    /* display: inline-flex; */
    justify-content: center;
    align-items: center;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* border-radius: 5px; */
    height: 4vh;
    font-size: 1.1em;
    color: #ffffff;
`;
export const MerchantLink = styled(Link)`
    text-align: center;
    width: auto;
    overflow-x: auto;
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
`;
export const ImageCover = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto;
`;
export const Thumbnail = styled.div`
    width: 80%;
    height: 80%;
    background-size: cover;
    background-position: center;
    background-image: url("http://www.xcape.co.kr/m/img/logo.png");
`;
export const TimerImageCover = styled(motion.div)`
    display: flex;
    height: 30vh;
    align-items: center;
    justify-content: center;
    padding: 10px -10px;
    margin: auto;
`;
export const TimerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: ${(props) => props.theme.ku.bgcolor};
    background-image: url("http://xcape.co.kr/m/img/timer_bg2.jpg");
`;
export const Timer = styled.div`
    color: #ffffc9;
    font-size: 60px;
    font-weight: 700;
`;
