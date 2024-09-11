import { whatsAppLink } from '@/ProjectData/socialMidias';
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function OrderButton() {
  const clickFunction = () => {
    console.log('OrderButton Clicked')
  }

  return (
    <Link href={whatsAppLink} target='_blank'  className="text3 bg-Highlight w-36 h-9 flex gap-2 items-center justify-center shadow-md rounded-md relative hover:bottom-1 group">
      <FaWhatsapp className='hidden group-hover:inline-block text-xl'/>
      Fazer Pedido
    </Link>
  )
}
