import { SearchBar } from '@/components/SearchBar';
import { PageMainTitle } from '@/components/PageMainTitle';
import { PageSubTitle } from '@/components/PageSubTitle';
import { ContestCard } from '@/components/contest/ContestCard';

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
          <ContestCard title="공모전 제목" content="공모전 내용" />
          <ContestCard title="공모전 제목" content="공모전 내용" />
          <ContestCard title="공모전 제목" content="공모전 내용" />
          <ContestCard title="공모전 제목" content="공모전 내용" />
          <ContestCard title="공모전 제목" content="공모전 내용" />
          <ContestCard title="공모전 제목" content="공모전 내용" />
        </div>
      </div>
    </>
  );
}
