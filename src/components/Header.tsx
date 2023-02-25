import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isMainAtom } from "../atom";
import MainMenu from "./MainMenu";
import {
    ImageCover,
    Merchant,
    MerChants,
    Nav,
    Thumbnail,
    Timer,
    TimerImage,
    TimerImageCover,
    Wrapper,
} from "./styled/headerStyled";

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
