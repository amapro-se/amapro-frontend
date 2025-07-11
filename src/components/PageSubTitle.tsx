import { PageSubTitleProps } from '../../types/components/PageSubTitle.type';

export function PageSubTitle({ title, className }: PageSubTitleProps) {
  return <div className={`font-semibold text-sm mt-8 ${className}`}>{title}</div>;
}
