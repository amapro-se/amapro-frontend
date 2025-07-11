import { SearchBar } from '@/components/SearchBar';

export function ContestListPage() {
  return (
    <>
      <div className="bg-zinc-900 pb-4">
        {/* 메인 타이틀 */}
        <div className="text-white text-[40px] font-extrabold text-center">CONTEST LIST</div>
        {/* 검색창 */}
        <SearchBar />
      </div>
      <div className="mx-8">
        {/* 서브 타이틀 */}
        <div className="font-semibold text-sm mt-8">추천 프로젝트</div>
        {/* 리스트 */}
        <div className="mt-4 grid grid-cols-2 gap-1 rounded-md">
          <div className="h-60 bg-zinc-400 rounded-md"></div>
          <div className="h-60 bg-zinc-400 rounded-md"></div>
          <div className="h-60 bg-zinc-400 rounded-md"></div>
          <div className="h-60 bg-zinc-400 rounded-md"></div>
          <div className="h-60 bg-zinc-400 rounded-md"></div>
          <div className="h-60 bg-zinc-400 rounded-md"></div>
        </div>
      </div>
    </>
  );
}
