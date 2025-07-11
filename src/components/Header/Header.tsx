'use client';

import { HeaderMenuButton } from './buttons/HeaderMenuButton';
import { HeaderUserButton } from './buttons/HeaderUserButton';

export function Header() {
  return (
    <header className="w-full h-20 pt-4 px-6 bg-zinc-900 text-white flex items-center justify-between relative">
      {/* 왼쪽 버튼 */}
      <HeaderMenuButton />

      {/* 메인 타이틀 */}
      <h1 className="text-[28px] font-extrabold mx-auto">AMAPRO</h1>

      {/* 오른쪽 버튼 */}
      <HeaderUserButton />
    </header>
  );
}
