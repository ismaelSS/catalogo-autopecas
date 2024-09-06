type tCheckBox = {
  selected: boolean
  label: string
  onClick: () => void
  type?: 'primary' | 'secondary'
}

export default function CheckBox({
  selected,
  label,
  onClick,
  type = 'primary',
}: tCheckBox) {
  return (
    <div
      className="flex gap-1 items-center w-fit cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`rounded-full border-2 border-pressable1 cursor-pointer hover:contrast-150 ${
          selected && 'bg-main2 border-main1'
        } ${type === 'primary' ? 'w-5 h-5 ' : 'w-4 h-4'}`}
      />

      <span className={`${type === 'primary' ? 'text-lg' : ''}`}>{label}</span>
    </div>
  )
}
