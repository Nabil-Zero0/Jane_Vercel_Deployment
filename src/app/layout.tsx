import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "@xyflow/react/dist/style.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DeploymentNoticeModal } from "@/components/deployment-notice-modal";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jane Dashboard - SIH 26 Demo",
  description: "Jane - Dark Web Threat Actor Attribution Cockpit (Web Preview Demo)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", inter.variable)} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <DeploymentNoticeModal />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
