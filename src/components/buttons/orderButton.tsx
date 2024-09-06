import React from 'react'

export default function OrderButton() {
  const clickFunction = () => {
    console.log('OrderButton Clicked')
  }

  return (
    <button className="text3 bg-Highlight w-36 h-9 shadow-md rounded-md relative hover:bottom-1">
      Fazer Pedido
    </button>
  )
}
