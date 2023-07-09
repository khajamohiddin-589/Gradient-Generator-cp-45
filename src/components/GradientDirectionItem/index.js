import {GradientButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, updateGradient} = props
  console.log(isActive)
  const {displayText, value} = directionDetails

  const changeActiveButton = () => {
    updateGradient(value)
  }
  return (
    <ListItem>
      <GradientButton
        onClick={changeActiveButton}
        isActive={isActive}
        type="button"
      >
        {displayText}
      </GradientButton>
    </ListItem>
  )
}
export default GradientDirectionItem
