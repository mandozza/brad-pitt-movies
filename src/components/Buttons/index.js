import styled from 'styled-components'
import Btns from './btnConfig'

const Button = styled.a`
  border-radius: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Righteous', cursive;
  ${props => props.type && Btns[props.type].btnStyles}
`
export default Button
