import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`
export const GradientButton = styled.button`
  cursor: pointer;
  height: 50px;
  width: 120px;
  border-radius: 7px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  border: none;
  font-size: 15px;
  font-weight: 500;
  opacity: ${props => (props.isActive ? 1 : 0.5)};

  @media screen and (max-width: 576px) {
    height: 25px;
    width: 70px;
    font-size: 10px;
    border-radius: 3px;
  }
`
