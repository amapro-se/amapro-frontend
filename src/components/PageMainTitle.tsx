import { PageMainTitleProps } from '../../types/components/PageMainTitle.type';

export function PageMainTitle({ title, className }: PageMainTitleProps) {
  return (
    <div className={`text-white text-[40px] font-extrabold text-center ${className}`}>{title}</div>
  );
}
