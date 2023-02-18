import { motion } from "framer-motion";
import styled from "styled-components";

export const ReservationWrapper = styled.div`
    border: 1px solid #363636;
    border-radius: 3px;
    background-color: #282828;
`;
export const ReservationMenuBar = styled.div`
    display: flex;
    margin-top: 10px;
`;
export const ReservationMenu = styled.div<{ fontColor: string }>`
    width: 100%;
    height: 4vh;
    text-align: center;
    font-size: 1em;
    color: whitesmoke;
    color: ${(props) => props.fontColor};
`;
export const BgImage = styled.div`
    padding: 4vw;
    background-size: 100% 100%;
`;
export const DateForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 3vh;
`;
export const DateEn = styled.div`
    font-size: 1.2em;
    font-weight: 700;
`;
export const DateKr = styled.div`
    font-size: 0.8em;
    font-weight: 500;
`;
export const Possible = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    color: red;
`;
export const Available = styled.div<{ color: string; marginRight?: string }>`
    margin-left: 7px;
    margin-right: ${(props) => props.marginRight};
    color: ${(props) => props.color};
`;

export const ThemeList = styled.div`
    margin: 2vw;
    padding: 3vw;
    background-color: red;
`;
export const Theme = styled.div``;
export const ThemeTitle = styled.div`
    display: flex;
`;
export const TitleKr = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1.6vw;
    color: #ffffff;
`;
export const TitleEn = styled.div`
    margin: auto 0px;
    font-size: 1rem;
    color: #ffffff;
`;
export const Condition = styled.div`
    display: flex;
    margin-top: 1vh;
`;
export const ThemeImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const Timetable = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0.3vh;
`;
export const Time = styled.div`
    width: 99%;
    margin: auto;
    margin-top: 0.5vh;
    background-color: saddlebrown;
    height: 4vh;
`;
export const Difficulty = styled.div`
    margin: auto 0;
    margin-right: 1vw;
    color: #ffffff;
`;
export const Star = styled.div`
    margin: auto 0;
    margin-right: 1vw;
    font-size: 1.7em;
`;
export const Personnel = styled.div`
    margin: auto 0;
    color: #ffffff;
`;
export const Confirm = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    margin: 40px;
    font: inherit;
    color: #ffffff;
`;
export const Title = styled.div`
    color: #fff;
    text-align: center;
    font-weight: 500;
    line-height: 150%;
    font-size: 1.6em;
`;
export const SubTitle = styled.div`
    font-size: 0.8em;
    text-align: center;
    margin-top: 5px;
    padding-bottom: 30px;
`;
export const InputForm = styled.div`
    display: flex;
    padding: 15px 0;
    margin-bottom: 40px;
    border-top: 1px solid #888888;
    border-bottom: 1px solid #888888;
`;
export const Phone = styled.div`
    width: 20%;
    color: #aaaaaa;
    margin-left: 5px;
    margin-right: 10px;
    text-align: center;
`;
export const EngPhone = styled.div`
    /* font-size: 15.6px; */
    font-size: 0.9em;
    font-weight: 700;
`;
export const KrPhone = styled.div`
    /* font-size: 13px; */
    font-size: 0.7em;
    font-weight: 500;
`;
export const Input = styled.input`
    width: 100%;
    height: 34px;
    padding: 7px;
    background-color: #383838;
    color: #ffffff;
    border: 0;
`;
export const Button = styled.div`
    text-align: center;
    padding: auto;
    background-color: #92c78c;
    font-weight: 500;
    color: #fff;
    border: 1px solid #92c78c;
    width: 55%;
    padding: 12px 35px 12px 35px;
    line-height: 20px;
    text-decoration: none;
    font-size: 1.5em;
    vertical-align: middle;
    top: 0;
    left: 0;
    margin: auto;
    margin-bottom: 20px;
    cursor: pointer;
`;
export const Underline = styled(motion.div)`
    border-bottom: 1px solid;
    border-color: white;
    vertical-align: bottom;
    height: 1vh;
`;
