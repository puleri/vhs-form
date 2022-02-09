import { useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function YearSelect () {
  const [isActive, setIsActive] = useState(false)

  const years = []
  for (let i = 100; i > 0; i--) {
    years.push(<div css={css`position:absolute; width: 100px; height:100px;`} value={1917 + i}>{1917 + i}</div>)
  }

  return (
    <div css={css`
      text-align: center;
      background: #2a2e35 ;
      position: relative;
      font-size: 10px;
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      color: #ccd3da;
      background: #2a2e35 ;
      border: 1px solid #3e434a;
      border-radius: 5px;
      min-height: 25px;
      margin: 7px 0;
      padding: 2.5px 5px;
      box-sizing: border-box;
      grid-template-columns: 40% 25% 30%;
      width: 400px;
      min-height: 25px;
      &:hover {
      }
    `}>
      <div css={css`
        `}
        className="dropdown-btn" onClick={(e) => {
          e.preventdefault()
          setIsActive(!setIsActive)
        }
      }>
      Year
      <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {years}
        </div>
      )}
    </div>
  )
}
