import './globals.css';

export const metadata = {
  title: 'Storm of Blade: Arena Duel',
  description:
    'A first-person sword-fighting arena with physics-driven clashes, 900 champions, five arenas, and a giant final boss.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/icon-256.png',
    apple: '/icon-256.png',
  },
  openGraph: {
    title: 'Storm of Blade: Arena Duel',
    description:
      'Physics-driven sword duels, 900 bosses, five arenas, first and third person.',
    images: ['/icon-512.png'],
  },
};

export const viewport = {
  themeColor: '#0b1728',
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
