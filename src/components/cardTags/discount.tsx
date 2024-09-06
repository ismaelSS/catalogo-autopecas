import { FaCaretDown } from 'react-icons/fa'

type tCardTag = {
  discount: string
}

export default function CardTag({ discount }: tCardTag) {
  return (
    <div className="flex flex-col items-center bg-main1 rounded-sm p-1 pt-3 pb-1 h-11 justify-center">
      <span className="text-sm font-bold text-text1 leading-[0.40rem]">
        {discount}
      </span>
      <FaCaretDown className=" text-text1" />
    </div>
  )
}
