import { FaMagnifyingGlass } from "react-icons/fa6";

type tSearchInput = {
  placeholder: string;
  onChange: (productName: string) => void;
};

export default function SearchInput({ placeholder, onChange }: tSearchInput) {
  return (
    <div className="flex items-center border-2 pl-2 pr-2 gap-2 max-w-72 border-neutral-400 focus-within:border-neutral-700 h-10 rounded-md transition-colors duration-300">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 h-full placeholder:text-text4 outline-none"
        onChange={(e) => onChange(e.target.value)}
      />
      <FaMagnifyingGlass className="text-text4 text-lg" />
    </div>
  );
}
