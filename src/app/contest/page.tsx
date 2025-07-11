import { SearchBar } from '@/components/SearchBar';
import { PageMainTitle } from '@/components/PageMainTitle';
import { PageSubTitle } from '@/components/PageSubTitle';

export function ContestListPage() {
  return (
    <>
      <div className="bg-zinc-900 pb-4">
        {/* 메인 타이틀 */}
        <PageMainTitle title="CONTEST LIST" />
        {/* 검색창 */}
        <SearchBar />
      </div>
      <div className="mx-8">
        {/* 서브 타이틀 */}
        <PageSubTitle title="추천 공모전" />
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
