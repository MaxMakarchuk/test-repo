import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet");
    }
`;


export const ProductCard = styled.div`
    position: absolute;
    width: 335px;
    height: 277px;
    left: 20px;
    top: 40px;
    background: #FFFFFF;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
    border-radius: 16px;
`;

const CardHead = styled.div`
    position: absolute;
    height: 21px;
    top: 24px;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

export const Type = styled(CardHead)`
    left: 24px;
    width: 31px;
`;

export const Price = styled(CardHead)`
    right: 24px;
    width: 38px;
    text-align: right;
`;

export const Prices = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    padding-left: 24px;
    padding-right: 24px;
    top: 61px;
`;

export const WeightPriceTemplate = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 287px;
    margin-top: 16px;
`;

export const SubmitField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    margin-left: 49px;
    margin-right: 49px;
`;

export const PriceField = styled.span`
    position: absolute;
    width: 84px;
    height: 28px;
    left: 49px;
    bottom: 50px;
    font-size: 24px;
    line-height: 28px;
    text-align: right;
    color: #000000;
`;

export const SubmitButton = styled.button`
    position: absolute;
    width: 137px;
    height: 48px;
    left: 149px;
    top: 189px;
    cursor: pointer;
    background: #6CA22C;
    border-radius: 8px;
    outline: none;
`;

export const SubmitButtonCart = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 16px;
    top: 12px;

`;

export const SubmitButtonText = styled.span`
    position: absolute;
    width: 73px;
    height: 16px;
    left: 48px;
    top: 16px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
`;

export const Label = styled.label`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 24px;
    border-radius: 12px;
    z-index: 100;
    border: 1px solid #6CA22C;
    cursor: pointer;
`;


export const Input = styled.input`
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 200;
  opacity: 0;
  cursor: pointer;
  &:checked + ${Label} {
    background: white;
    border: 8px solid #6CA22C;
  };
`;
export const Weight = styled.span`
    position: absolute;
    left: 64px;
`;