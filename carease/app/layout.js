
import './globals.css';

export const metadata = {
  title: 'CarEase',
  description: 'Car Comparision Webapp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body>{children}</body>
    </html>
  );
}
