import './globals.css';

export const metadata = {
  title: 'Clash of Steel: Arena Duel',
  description:
    'A first-person sword-fighting arena with physics-driven clashes, 900 champions, five arenas, and a giant final boss.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon-256.png',
    apple: '/icon-256.png',
  },
  openGraph: {
    title: 'Clash of Steel: Arena Duel',
    description:
      'Physics-driven sword duels, 900 bosses, five arenas, first and third person.',
    images: ['/icon-256.png'],
  },
};

export const viewport = {
  themeColor: '#14171b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
