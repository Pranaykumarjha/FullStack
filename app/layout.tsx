import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' } }}>
          <header className="flex items-center justify-end gap-4 p-4">
            <Show when="signed-out">
              <SignInButton />
              {/* <SignUpButton /> */}
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
