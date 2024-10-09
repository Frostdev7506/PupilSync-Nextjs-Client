import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Providers } from "./providers";
import { Theme } from "@radix-ui/themes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark">
          <Navbar />
          <div
            style={{ flexGrow: 1, minHeight: "100vh", paddingBottom: "200px" }}
          >
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
