import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isMainAtom } from "../atom";
import MainMenu from "./MainMenu";

const Wrapper = styled.div`
    background-color: black;
`;
const Nav = styled.nav`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: red;
    margin: auto;
`;
const MerChants = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Merchant = styled(motion.li)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 55px;
    height: 22px;
    margin: 3px;
    font-size: 13px;
`;
const ImageCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
const Thumbnail = styled.img`
    width: 180px;
    height: 58px;
    border-radius: 0px;
    background-size: cover;
    background-image: url("http://www.xcape.co.kr/m/img/logo.png");
`;
const TimerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 198px;
    margin: auto;
    background-size: cover;
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
                            {/* TODO: 지점별 링크 추가 */}
                            {/* <Link to={`/${merchant[1]}`}>{merchant[0]}</Link> */}
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
                <TimerImage>
                    <Timer>00:00:00</Timer>
                </TimerImage>
            ) : null}
            <MainMenu />
        </Wrapper>
    );
}
export default Header;
