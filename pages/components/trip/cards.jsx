import Card from "./card";
import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Cards = ({trips}) => {
    const egypt = trips?.filter(trip => trip.country === 'Egypt');
    const bulgaria = trips?.filter(trip => trip.country === 'Bulgaria');
    const italy = trips?.filter(trip => trip.country === 'Italy');
    return (
        <CardsWrapper>
            <Card countryTrip={egypt}/>
            <Card countryTrip={bulgaria}/>
            <Card countryTrip={italy}/>
        </CardsWrapper>
    )
}

export default Cards;
