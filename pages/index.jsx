import styled from "styled-components";
import {Title} from "./components/typo";
import {Button} from "./components/ui/button";
import Cards from "./components/trip/cards";


export const Wrapper = styled.section`
  max-width: 1216px;
  margin: 0 auto;
  height: fit-content;
`;

export const TripHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;



export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/trips');
    if (res.status !== 200) {
        throw new Error('Failed to fetch');
    }

    const {trips} = await res.json();

    return {
        props: {
            trips,
        },
    };
}

export default function Home({trips}) {
    return (
        <Wrapper>
            <TripHeader>
                <Title>Big saving on all inclusive trips</Title>
                <Button>See all offers</Button>
            </TripHeader>
            <Cards trips={trips}/>
        </Wrapper>
    )
}
