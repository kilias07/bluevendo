import styled from "styled-components";
import {Text} from "../typo";

export const PriceContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const PriceLastMinute = styled(Text)`
  color: #3E4958;
  font-weight: 600;
  font-size: 16px;
`

const PriceNormal = styled(Text)`
  text-decoration-line: line-through;
  color: rgb(255, 83, 83);
`
const PerPerson = styled(Text)`
  color: rgba(62, 73, 88, 1);
  font-size: 12px;
  font-weight: 500;
`

export const Price = ({price}) => {
    return (
        <PriceContainer>
            <PriceNormal>{price?.normal} pln</PriceNormal>
            <PriceLastMinute>{price?.lastMinute} pln</PriceLastMinute>
            <PerPerson>per person</PerPerson>
        </PriceContainer>
    )
}
