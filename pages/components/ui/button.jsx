import styled from "styled-components";

export const Button = styled.button`
  width: 176px;
  height: 49px;
  padding: 15px 30px;
  background: #C7E7F5;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  font-family: "inter", sans-serif;
  line-height: 19.36px;
`;

export const MobileButton = styled(Button)`
  width: 384px;
  text-align: center;
  margin: 0 auto 15px auto;
  display: block;
`;
