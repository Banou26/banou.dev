/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as LeonSans from 'leonsans'

console.log(LeonSans)

const leon = new LeonSans({
  text: 'The quick brown\nfox jumps over\nthe lazy dog',
  color: ['#342f2e'],
  size: 120,
  weight: 300
})

console.log(leon)

const style = css`
height: 100%;
width: 100%;
color: white;
background-color: rgb(20, 20, 20);
`

export default () => {
  return (
    <div css={style}>
      The weebdev's nest
    </div>
  )
}
