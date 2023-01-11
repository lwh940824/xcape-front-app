import styled from "styled-components";

const ReservationMenuBar = styled.div`
    width: 100%;
    display: flex;
`;
const ReservationMenu = styled.div`
    width: 50%;
    height: 40px;
`;

function Reservation() {
    return (
        <ReservationMenuBar>
            <ReservationMenu></ReservationMenu>
            <ReservationMenu></ReservationMenu>
        </ReservationMenuBar>
    );
}

export default Reservation;
