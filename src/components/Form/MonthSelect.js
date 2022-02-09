import { useState } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export default function MonthSelect () {
  const [isActive, setIsActive] = useState(false)

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
      Month
      <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item" value="">Month</div>
          <div className="dropdown-item" value="1">January</div>
          <div className="dropdown-item" value="2">Februrary</div>
          <div className="dropdown-item" value="3">March</div>
          <div className="dropdown-item" value="4">April</div>
          <div className="dropdown-item" value="5">May</div>
          <div className="dropdown-item" value="6">June</div>
          <div className="dropdown-item" value="7">July</div>
          <div className="dropdown-item" value="8">August</div>
          <div className="dropdown-item" value="9">September</div>
          <div className="dropdown-item" value="10">October</div>
          <div className="dropdown-item" value="11">November</div>
          <div className="dropdown-item" value="12">December</div>
        </div>
      )}
    </div>
  )
}
