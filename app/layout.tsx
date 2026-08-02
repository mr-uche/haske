import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haske Lafiya | Digital Health Infrastructure",
  description:
    "Haske Lafiya powers connected, interoperable digital health infrastructure for hospitals, clinics, and health systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
