import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GHMS - Landing Page',
  description: 'Landing page da GHMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
