import * as React from 'react'
import {useState} from 'react'
import {ProductCard, Type, Price, Prices, WeightPriceTemplate, SubmitField, PriceField,
    SubmitButton, SubmitButtonText, SubmitButtonCart, Label, Input, Weight} from './styledcomps'

const data = [
  {
    weight: 500,
    price: 500
  },
  {
    weight: 100,
    price: 150
  },
  {
    weight: 50,
    price: 90
  }
]

const TestApp = () => {

  const [currentPrice, setCurrentPrice] = useState(0)
  
  const addToCart = () => {
    alert(`Товар на сумму ${currentPrice} вже у Вашому кошику! Залишилося оформити замовлення!!!`)
  }

  return(
    <ProductCard>
      <div>
        <Type>Тип</Type>
        <Price>Ціна</Price>
      </div>
      <Prices>
        {data.map(item => <WeightPriceTemplate key ={item.weight}>
        <div>
          <Input type='radio' name = 'weightPrice' id = 'Choice_'{...item.weight} value={item.price} 
           onClick={() => setCurrentPrice(item.price)}/>
          <Label htmlFor = 'Choice_'{...item.weight}></Label>
          <Weight>{item.weight} г</Weight>
        </div>
        <span>{item.price} грн</span>  
        </WeightPriceTemplate>)}
      </Prices>
      <SubmitField>
        <PriceField>{currentPrice} грн</PriceField>
        <SubmitButton onSubmit = {(e) => addToCart()}>
          <SubmitButtonCart>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.73254 14.5158H7.73364C7.73456 14.5158 7.73547 14.5156 7.73639 14.5156H20.4844C20.7982 14.5156 21.0742 14.3074 21.1604 14.0057L23.9729 4.16193C24.0335 3.94971 23.991 3.72156 23.8583 3.54541C23.7253 3.36926 23.5175 3.26562 23.2969 3.26562H6.11096L5.60834 1.00372C5.53674 0.682007 5.25146 0.453125 4.92188 0.453125H0.703125C0.314758 0.453125 0 0.767883 0 1.15625C0 1.54462 0.314758 1.85937 0.703125 1.85937H4.35791C4.4469 2.26019 6.76318 12.6837 6.89648 13.2833C6.14923 13.6082 5.625 14.3532 5.625 15.2187C5.625 16.3818 6.57129 17.3281 7.73438 17.3281H20.4844C20.8727 17.3281 21.1875 17.0134 21.1875 16.625C21.1875 16.2366 20.8727 15.9219 20.4844 15.9219H7.73438C7.34674 15.9219 7.03125 15.6064 7.03125 15.2187C7.03125 14.8317 7.34564 14.5167 7.73254 14.5158ZM22.3647 4.67187L19.9539 13.1094H8.29834L6.42334 4.67187H22.3647Z" fill="white"/>
              <path d="M7.03123 19.4375C7.03123 20.6006 7.97752 21.5469 9.14061 21.5469C10.3037 21.5469 11.25 20.6006 11.25 19.4375C11.25 18.2744 10.3037 17.3281 9.14061 17.3281C7.97752 17.3281 7.03123 18.2744 7.03123 19.4375ZM9.14061 18.7344C9.52824 18.7344 9.84373 19.0499 9.84373 19.4375C9.84373 19.8251 9.52824 20.1406 9.14061 20.1406C8.75298 20.1406 8.43748 19.8251 8.43748 19.4375C8.43748 19.0499 8.75298 18.7344 9.14061 18.7344Z" fill="white"/>
              <path d="M16.9688 19.4375C16.9688 20.6006 17.915 21.5469 19.0781 21.5469C20.2412 21.5469 21.1875 20.6006 21.1875 19.4375C21.1875 18.2744 20.2412 17.3281 19.0781 17.3281C17.915 17.3281 16.9688 18.2744 16.9688 19.4375ZM19.0781 18.7344C19.4658 18.7344 19.7812 19.0499 19.7812 19.4375C19.7812 19.8251 19.4658 20.1406 19.0781 20.1406C18.6905 20.1406 18.375 19.8251 18.375 19.4375C18.375 19.0499 18.6905 18.7344 19.0781 18.7344Z" fill="white"/>
            </svg>
          </SubmitButtonCart>
          <SubmitButtonText>До кошика</SubmitButtonText>
        </SubmitButton>
      </SubmitField>
    </ProductCard>
  )
}


export default TestApp
