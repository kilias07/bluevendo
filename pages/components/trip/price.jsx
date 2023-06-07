import styled from "styled-components";
import {Text} from "../typo";
export const PriceContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 18px;
`;


export const Price = ({price}) => {
    return (
        <PriceContainer>
            <Text>{price?.normal} pln</Text>
            <Text>{price?.lastMinute} pln</Text>
            <Text>per person</Text>
        </PriceContainer>
    )
}
