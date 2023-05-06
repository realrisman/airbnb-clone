import { Nunito } from "next/font/google";

import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Nabvar";
import ToasterProvider from "./providers/ToasterProvider";

import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js and Tailwind CSS",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
