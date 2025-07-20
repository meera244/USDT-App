// app/layout.js
export const metadata = {
  title: 'USDXT DApp',
  description: 'Mock DApp for USDXT Token',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#111' }}>
        {children}
      </body>
    </html>
  );
}
