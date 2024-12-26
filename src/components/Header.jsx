import React, { memo } from 'react'

const Header = () => {
    console.log("Header Rendered");
    
  return (
    <div>Header</div>
  )
}

export default memo(Header);