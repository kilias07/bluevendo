import styled from "styled-components";
import Image from "next/image";
import {Subtitle, Title, Text, Caption} from "../typo";
import Stars from "./stars";
import {Price} from "./price";
import Link from "next/link";


const Container = styled.div`
  width: 384px;
`;


const ImageCard = styled.div`
  width: 384px;
  height: 199px;
  position: relative;
  margin-top: 47.5px
`;



const Offers = styled.div`
    width: 384px;
  `;
const Offer = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  height: fit-content;
  position: relative;
  padding-left: 18px;
`;
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}.${month}.${year}`;
}

const Card = ({countryTrip}) => {
    return (
        <Container>
            <ImageCard>
                <Image src={countryTrip[0]?.image} alt={countryTrip[0]?.country} layout="fill" style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '6px'
                }}/>
                <Caption>
                    {countryTrip[0]?.country}
                </Caption>
            </ImageCard>
            <Offers>
                {countryTrip.map((trip, index) => {
                    return (
                        <Offer key={index}>
                            <Subtitle>{trip.hotelName}</Subtitle>
                            <Stars number={trip.stars}/>
                            <Text>{formatDate(new Date(trip.date))}</Text>
                            <Text>Last Minute | All inclusive</Text>
                            <Price price={trip.price}/>
                        </Offer>
                    )
                }
                )}
            </Offers>
            <Link href={`/trip/${countryTrip[0]?.country}`}>See all offers </Link>
        </Container>
    )
}

export default Card;
