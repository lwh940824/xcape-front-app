import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Merchant = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 55px;
    height: 22px;
    margin: 3px;
    background-color: ${(props) => props.theme.merchats.bgColor};
    color: ${(props) => props.theme.merchats.color};
    font-size: 13px;
`;
const ImageCover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Thumbnail = styled.img`
    width: 180px;
    height: 58px;
    border-radius: 0px;
    background-size: cover;
    background-image: url("http://www.xcape.co.kr/m/img/logo.png");
`;

function Header() {
    return (
        <Wrapper>
            <Nav>
                <MerChants>
                    {["건대점", "건대2호점", "강남점", "수원점", "홍대점"].map(
                        (merchant, index) => (
                            <Merchant key={index}>
                                {/* TODO: 지점별 링크 추가 */}
                                <Link to={""}>{merchant}</Link>
                            </Merchant>
                        )
                    )}
                </MerChants>
                {/* TODO: 지점별 썸네일 */}
            </Nav>
            <ImageCover>
                <Thumbnail />
            </ImageCover>
        </Wrapper>
    );
}
export default Header;
