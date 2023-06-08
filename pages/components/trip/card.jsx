import styled from "styled-components";
import Image from "next/image";
import {Caption, Subtitle, Text, TextLink} from "../typo";
import Stars from "./stars";
import {Price} from "./price";
import Link from "next/link";


const Container = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 9px rgba(79, 79, 79, 0.3);
  border-radius: 6px;
  margin: 0 auto 45px auto;
`;


const ImageCard = styled.div`
  width: 384px;
  height: 199px;
  position: relative;
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


const LastMinute = styled.span`
  color: rgba(255, 83, 83, 1);
  font-weight: 600;
`;
const AllInclusive = styled.span`
  font-weight: 500;
  color: var(--text-lightGray-color)
`;

const TextWrapper = styled(Text)`
  margin: 5px 0;
`;


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
                            <Offer key={index} style={
                                index % 2 === 0 ? {backgroundColor: '#FFFFFF'} : {
                                    backgroundColor: '#F3F4F6',
                                    borderRadius: '6px'
                                }
                            }>
                                <Subtitle>{trip.hotelName}</Subtitle>
                                <Stars number={trip.stars}/>
                                <Text>{formatDate(new Date(trip.date))}</Text>
                                <TextWrapper>
                                    <LastMinute>Last Minute</LastMinute> <AllInclusive> | All inclusive</AllInclusive>
                                </TextWrapper>
                                <Price price={trip.price}/>
                            </Offer>
                        )
                    }
                )}
            </Offers>
            <Link href={`/trip/${countryTrip[0]?.country}`}
                  style={{alignSelf: "flex-end", textDecoration: "none", margin: "21.5px 18px 21.5px 0"}}>
                <TextLink>See all offers &nbsp; -></TextLink>
            </Link>
        </Container>
    )
}

export default Card;
