import Card from "./card";
import styled from "styled-components";
import {useWindowSize} from "usehooks-ts";
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";


const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`;

const Cards = ({trips}) => {
    const egypt = trips?.filter(trip => trip.country === 'Egypt');
    const bulgaria = trips?.filter(trip => trip.country === 'Bulgaria');
    const italy = trips?.filter(trip => trip.country === 'Italy');

    const {width} = useWindowSize();
    return (
        width > 768 ?
        <CardsWrapper>
            <Card countryTrip={egypt}/>
            <Card countryTrip={bulgaria}/>
            <Card countryTrip={italy}/>
        </CardsWrapper>
            :
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
                    <Card countryTrip={egypt}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card countryTrip={italy}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card countryTrip={bulgaria}/>
                </SwiperSlide>
            </Swiper>
    )
}

export default Cards;
