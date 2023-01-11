import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`;
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #4c3d35;
    height: 34px;
    color: ${(props) => props.theme.ku.color};
`;

const mainMenuList = [
    "XCAPE",
    "ROOMS",
    "RESERVATION",
    "REVIEW",
    "EVENT",
    "CONTACT",
];

function MainMenu() {
    return (
        <Wrapper>
            {mainMenuList.map((menu, index) => (
                <Menu key={index}>
                    <Link to={`./${menu.toLowerCase()}`}>{menu}</Link>
                </Menu>
            ))}
        </Wrapper>
    );
}

export default MainMenu;
