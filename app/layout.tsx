import type { Metadata } from "next";
import { Londrina_Solid } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "./NavBar";

const londrinaSolid = Londrina_Solid({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "MiniRamp Jadson Brian",
  description: "A história do skate e do MiniRamp Jadson Brian",
  openGraph: {
    images: `https://i.ibb.co/G7BKNPp/image.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={londrinaSolid.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
