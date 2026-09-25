import "./globals.css";
import Navbar from "@/components/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";

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
        </FitLogProvider>
      </body>
    </html>
  );
}