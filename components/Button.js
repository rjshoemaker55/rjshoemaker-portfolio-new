import styled from 'styled-components'
import { colors } from '../utils/theme'

const CustomButton = styled.a`
  background-color: rgb(${(props) => colors[props.color]});
  width: 6em;
  border: 3px solid rgb(${(props) => colors[props.color]});
  border-radius: 5px;
  padding: 0px 10px;
  line-height: 1;
  transition-duration: 0.3s;

  &:hover {
    background-color: transparent;
    cursor: pointer;

    > img {
      filter: invert(100%);
    }
  }

  &:nth-child(2) {
    margin-left: 40px;
    padding-top: 7px;
  }

  > img {
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 768px) {
    width: 7em;
  }
`
const Button = (props) => {
  return (
    <CustomButton
      color={props.color}
      href={props.href}
      rel='noreferrer'
      target='_blank'
    >
      {props.children}
    </CustomButton>
  )
}

export default Button
