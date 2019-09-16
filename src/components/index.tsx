/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const style = css`
color: white;
background-color: rgb(20, 20, 20);
`

export default () => {
  return (
    <div css={style}>
      foo
    </div>
  )
}
