import React from 'react'
import './styles.less'

const Paper = ({
  body
}) => {
  return (
    <div className='paper'>
      <div className='pattern'>
        <div className='content'>
          {body}
        </div>
      </div>
    </div>
  )
}

export default Paper
