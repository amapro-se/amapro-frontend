import { ContestCardProps } from '../../../types/components/contest/ContestCard.type';

export function ContestCard({ title, content }: ContestCardProps) {
  return (
    <div>
      {/* 공모전 이미지 */}
      <div className="h-44 bg-zinc-400 rounded-md"></div>
      {/* 공모전 정보 */}
      <div className="mx-1 mt-1 mb-3">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
