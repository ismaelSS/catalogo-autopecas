type tCardTag = {
  marker?: string
}

export default function CardTagMarker({ marker = 'EM ESTOQUE' }: tCardTag) {
  return (
    <span className="flex items-center justify-center text-[0.5rem] font-bold text-text2 text-center h-11 border-main1 border-[1px] rounded-sm text-wrap w-11 bg-primary">
      {marker}
    </span>
  )
}
