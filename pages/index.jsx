import styled from "styled-components";
import {Title} from "./components/typo";
import {Button, MobileButton} from "./components/ui/button";
import Cards from "./components/trip/cards";
import {useWindowSize} from "usehooks-ts";


export const Wrapper = styled.section`
  max-width: 1216px;
  margin: 0 auto;
  height: fit-content;
`;

export const TripHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
  margin: 48px 0;
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
    const {width} = useWindowSize();
    return (
        <Wrapper>
            <TripHeader>
                <Title>Big saving on all inclusive trips</Title>
                {width > 768 && <Button>See all offers</Button>}
            </TripHeader>
            <Cards trips={trips}/>
            {width < 768 && <MobileButton>See all offers</MobileButton>}

        </Wrapper>
    )
}
