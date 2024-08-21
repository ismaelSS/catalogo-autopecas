import React from 'react';

export default function BigOrderButton () {

  const clickFunction = () => {
    console.log('OrderButton Clicked')
  }

  return(
    <button
    className="text3 bg-Highlight h-12 shadow-md rounded-md relative hover:bottom-1"
    >
      Fazer Pedido
    </button>
  )
}