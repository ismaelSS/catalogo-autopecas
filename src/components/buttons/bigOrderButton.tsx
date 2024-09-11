import { whatsAppLink } from '@/ProjectData/socialMidias';
import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

type tBigOrderButton = {
  className?: string
}

export default function BigOrderButton({ className }: tBigOrderButton) {
  return (
    <Link href={whatsAppLink} target='_blank'  className={`text3 bg-Highlight h-12 shadow-md rounded-md relative hover:bottom-1 group flex justify-center items-center gap-3 ${className}`}>


      <FaWhatsapp className='hidden group-hover:inline-block text-xl'/>
      Fazer Pedido
    </Link>

  )
}
