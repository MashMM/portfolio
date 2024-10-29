'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'
import { Home, Briefcase, Folder, GraduationCap } from 'lucide-react'  // Import Lucide icons

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="border-b-border dark:border-b-darkBorder grid h-[50px] grid-cols-[1fr_1fr_1fr_1fr_50px] rounded-tr-base border-b-4 bg-black text-xl w600:text-lg w400:h-10 w400:text-base portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/"
      >
        <span className="hidden w400:inline"><Home /></span>
        <span className="w400:hidden">Home</span>
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase border-l-2 border-border dark:border-darkBorder',
          path === '/experience' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/"
      >
        <span className="hidden w400:inline"><Briefcase /></span>
        <span className="w400:hidden">Experience</span>
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase border-l-2 border-border dark:border-darkBorder',
          path === '/experience' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/"
      >
        <span className="hidden w400:inline"><Folder /></span>
        <span className="w400:hidden">Projects</span>
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase border-l-2 border-border dark:border-darkBorder',
          path === '/projects' ? 'bg-black text-white' : 'text-text bg-main',
        )}
        href="/"
      >
        <span className="hidden w400:inline"><GraduationCap /></span>
        <span className="w400:hidden">Education</span>
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}
