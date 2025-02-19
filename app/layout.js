import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="overflow-x-hidden">
            <Navbar />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
