import './globals.css';
import { startInactivePlayerCleanup } from '@/utils/clearInactivePlayers';

export const metadata = {
  title: 'Flarial',
  description: 'Flarial API and Website',
};

// Initialize cleanup interval on server side
if (typeof window === 'undefined') {
  startInactivePlayerCleanup(60000); // Run every minute
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
