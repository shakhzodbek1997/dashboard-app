import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
   <buton
    type="button"
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text-${size} p-3 hover:drop-shadow-xl cursor-pointer`}
   >
    {text}
   </buton>
  )
}

export default Button;