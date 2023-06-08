import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  text-align: center;
  margin-block: 0;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Subtitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
`;

export const Text = styled.p`
  color: rgb(0, 0, 0, 0.75);
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-block: 0;
  text-decoration: none;
`;

export const TextLink = styled.span`
  color: var(--text-blue-color);
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-block: 0;
  text-decoration: none;
`;


export const Caption = styled.h3`
  font-family: "inter", sans-serif;
  position: absolute;
  top: 24px;
  left: 24px;
  color: white;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
`;
