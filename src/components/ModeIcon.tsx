'use client'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FC } from 'react';

interface ModeIconProps {};

const ModeIcon: FC<ModeIconProps> = ({}) => {
    const { theme, setTheme } = useTheme();
  return <div className='absolute right-2 w-12 h-12 cursor-pointer dark:bg-primary-light dark:text-primary dark:shadow-slate-700 dark:shadow-lg bg-dark-background text-primary-light rounded-full flex items-center justify-center shadow-xl'
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >   {theme === "dark" ? <Sun /> : <Moon />} </div>;
};

export default ModeIcon;