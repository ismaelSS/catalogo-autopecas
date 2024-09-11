import { FaWrench } from 'react-icons/fa6'

export default function FreeAssemblyIndicator() {
  return (
    <div className="flex gap-1 text-green-600 absolute bottom-0 left-0 pb-1 bt-1">
      <FaWrench />
      <span className="font-bold text-xs">montagem grátis</span>
    </div>
  )
}
