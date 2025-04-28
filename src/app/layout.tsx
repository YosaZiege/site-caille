import type { Metadata, Viewport } from "next"; // Add Viewport import
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
   subsets: ["latin"],
   display: "swap",
   preload: true,
   variable: "--font-manrope",
});

export const metadata: Metadata = {
   title: "Caille",
   description: "",
};

export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
   userScalable: false,
   themeColor: '#ffffff',
   viewportFit: 'cover'
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
         <html lang="en" className={manrope.variable}>
            <head>
               <link
                  rel="preconnect"
                  href="https://fonts.googleapis.com"
                  crossOrigin="anonymous"
               />
               <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="anonymous"
               />
               {/* Add this to prevent phone number detection on mobile */}
               <meta name="format-detection" content="telephone=no" />
            </head>
            <body className={`${manrope.variable} ${inter.className} antialiased w-full overflow-x-hidden`}>
               <main className="min-h-[calc(100vh-200px)]"> {/* Adjust this value based on your header/footer height */}
                  {children}
               </main>
            </body>
         </html>
   );
}
