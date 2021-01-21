import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { colors } from '../utils/theme'

const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  border: rgb(${colors.blue}) 2px solid;
  border-radius: 5px;
  opacity: 0.85;
  z-index: 100;
  animation-fill-mode: forwards;
  transition-duration: 2s;
`

const LazyImage = ({ src }) => (
  <LazyLoad>
    <ImageWrapper src={src} />
  </LazyLoad>
)

export default LazyImage
