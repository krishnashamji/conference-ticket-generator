
import '@/app/ui/globals.css' // global styles import
import { inconsolata } from '@/app/ui/font';
import Background from "@/app/ui/Background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased min-h-screen relative`}>
        <Background />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}

