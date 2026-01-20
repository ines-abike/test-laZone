import { Provider } from "./provider";
import { siteConfig } from "@/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.description,
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
