'use client'
import { ThemeProvider } from 'next-themes';
import { FC,ReactNode } from 'react';

interface providersProps {
    children : ReactNode
};

const Providers: FC<providersProps> = ({children}) => {
  return <div> 
     <ThemeProvider attribute='class'>
       {children}
    </ThemeProvider> </div>;
};

export default Providers;