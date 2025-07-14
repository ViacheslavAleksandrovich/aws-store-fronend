export const metadata = {
  title: "AWS Store App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">{children}</body>
    </html>
  );
}
