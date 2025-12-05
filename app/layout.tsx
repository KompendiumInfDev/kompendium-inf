import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import 'katex/dist/katex.css';
import { IBM_Plex_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import SearchDialog from '@/components/search';
import { Banner } from 'fumadocs-ui/components/banner';
import { Body } from './layout.client';
import { twMerge } from 'tailwind-merge';

const IBMPlex = IBM_Plex_Sans({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
});

const JBMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'latin-ext'],
})

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${IBMPlex.variable} ${JBMono.variable}`} suppressHydrationWarning>
      <Body>
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          <Banner>UWAGA: Kompendium jest jeszcze we wczesnym etapie przygotowywania.</Banner>
          {children}
          </RootProvider>
      </Body>
    </html>
  );
}
