import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FitLog — Train With Intent",
  description:
    "A modern workout library to discover, plan, and track your daily training.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2500,
              style: {
                background: "#101010",
                color: "#ffffff",
                border: "1px solid #27272a",
              },
            }}
          />
        </FitLogProvider>
      </body>
    </html>
  );
}