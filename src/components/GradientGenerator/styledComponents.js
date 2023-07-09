import styled from 'styled-components'

export const GradientContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`
export const Direction = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 400;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const UnorderdDirectionsContainer = styled.ul`
  width: 50%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 0;
    margin: 0;
  }
`
export const PickColor = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 400;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  margin-top: 20px;
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  height: 50px;
  width: 150px;
  border-radius: 7px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    height: 30px;
    width: 100px;
    font-size: 13px;
    border-radius: 3px;
  }
`
