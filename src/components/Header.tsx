import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isMainAtom } from "../atom";
import MainMenu from "./MainMenu";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.ku.bgcolor};
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.merchats.onBgColor};
    margin: auto;
`;
const MerChants = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Merchant = styled(motion.li)`
    display: grid;
    grid-template-columns: auto;
    width: auto;
    /* display: inline-flex; */
    justify-content: center;
    align-items: center;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* border-radius: 5px; */
    height: 4vh;
    margin-top: 1vh;
    margin-left: 2vw;
    font-size: 1.1em;
    color: #ffffff;
`;
const ImageCover = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto;
`;
const Thumbnail = styled.div`
    width: 80%;
    height: 80%;
    background-size: cover;
    background-position: center;
    background-image: url("http://www.xcape.co.kr/m/img/logo.png");
`;
const TimerImageCover = styled(motion.div)`
    display: flex;
    height: 30vh;
    align-items: center;
    justify-content: center;
    padding: 10px -10px;
    margin: auto;
`;
const TimerImage = styled.div`
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
const Timer = styled.div`
    color: #ffffc9;
    font-size: 60px;
    font-weight: 700;
`;

function Header() {
    const mainUrl = useMatch("/:merchant");
    const [isMain, setIsMain] = useRecoilState<boolean>(isMainAtom);
    useEffect(() => {
        // 각 지점별 메인 화면 아닐시 타이머 숨기기
        mainUrl ? setIsMain(true) : setIsMain(false);
    });
    return (
        <Wrapper>
            <Nav>
                <MerChants>
                    {[
                        ["건대점", "ku"],
                        ["건대2호점", "ku2"],
                        ["강남점", "gangnam"],
                        ["수원점", "suwon"],
                        ["홍대점", "hongdae"],
                    ].map((merchant, index) => (
                        <Merchant key={index}>
                            <Link to={`/${merchant[1]}`}>{merchant[0]}</Link>
                        </Merchant>
                    ))}
                </MerChants>
                {/* TODO: 지점별 썸네일 */}
            </Nav>
            <ImageCover>
                <Thumbnail />
            </ImageCover>
            {isMain ? (
                <AnimatePresence>
                    {/* 타이머 이미지 애니메이션 */}
                    <TimerImageCover
                        key={1}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <TimerImage>
                            <Timer>00:00:00</Timer>
                        </TimerImage>
                    </TimerImageCover>
                </AnimatePresence>
            ) : null}
            <MainMenu />
        </Wrapper>
    );
}
export default Header;
