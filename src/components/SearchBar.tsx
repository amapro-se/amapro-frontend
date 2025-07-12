import { SearchBarProps } from '../../types/components/SearchBar.type';

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={`w-5/6 h-8 mx-auto my-2 relative ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-lg">🔍</span>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="w-full h-full pl-10 pr-4 rounded-md bg-zinc-100 text-sm focus:outline-none"
      />
    </div>
  );
}
