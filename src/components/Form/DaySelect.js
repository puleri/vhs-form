import { useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function DaySelect () {
  const [isActive, setIsActive] = useState(false)

  const days = []
  for (let i = 1; i <= 31; i++) {
    days.push(<div className="dropdown-item" value={i}>{i}</div>)
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
      <div className="dropdown-btn" onClick={(e) => setIsActive(!setIsActive)}>
      Day
      <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {days}
        </div>
      )}
    </div>
  )
}
