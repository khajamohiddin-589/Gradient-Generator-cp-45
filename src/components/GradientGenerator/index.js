import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Direction,
  Heading,
  UnorderdDirectionsContainer,
  PickColor,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientId: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  gradientMaker = () => {
    const {activeGradientId, colorOne, colorTwo} = this.state
    const newGradient = `to ${activeGradientId}, ${colorOne}, ${colorTwo}`
    this.setState({gradientValue: newGradient})
  }

  updateGradient = value => {
    this.setState({activeGradientId: value})
  }

  onChangeFromColor = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({colorTwo: event.target.value})
  }

  render() {
    const {gradientValue, activeGradientId, colorOne, colorTwo} = this.state
    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Direction>Choose Direction</Direction>
        <UnorderdDirectionsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              updateGradient={this.updateGradient}
              isActive={each.value === activeGradientId}
              key={each.directionId}
              directionDetails={each}
            />
          ))}
        </UnorderdDirectionsContainer>
        <PickColor>Pick the Colors</PickColor>
        <ColorPickerContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{colorOne}</ColorValue>
            <CustomInput
              onChange={this.onChangeFromColor}
              value={colorOne}
              type="color"
            />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{colorTwo}</ColorValue>
            <CustomInput
              onChange={this.onChangeToColor}
              value={colorTwo}
              type="color"
            />
          </CustomInputAndColorContainer>
        </ColorPickerContainer>
        <GenerateButton onClick={this.gradientMaker}>Generate</GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
