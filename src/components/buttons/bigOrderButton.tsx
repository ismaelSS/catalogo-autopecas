import React from 'react'

type tBigOrderButton = {
  className?: string
}

export default function BigOrderButton({ className }: tBigOrderButton) {
  return (
    <button
      className={`text3 bg-Highlight h-12 shadow-md rounded-md relative hover:bottom-1 ${className}`}
    >
      Fazer Pedido
    </button>
  )
}
